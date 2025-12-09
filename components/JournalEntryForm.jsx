import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";

export default function JournalEntryForm({ verb }) {
  const [notes, setNotes] = useState("");
  const [species, setSpecies] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [bait, setBait] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState({lat:0, lng:0});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let photoURL = "";
    if(photo){
      const storageRef = ref(storage, `photos/${photo.name}-${Date.now()}`);
      await uploadBytes(storageRef, photo);
      photoURL = await getDownloadURL(storageRef);
    }
    await addDoc(collection(db, "journalEntries"), {
      uid: auth.currentUser.uid,
      verb,
      notes,
      species,
      length,
      weight,
      bait,
      photoURL,
      location,
      createdAt: serverTimestamp()
    });
    setNotes(""); setSpecies(""); setLength(""); setWeight(""); setBait(""); setPhoto(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-800 p-6 rounded-lg mb-8 space-y-4">
      <input placeholder="Species" value={species} onChange={e=>setSpecies(e.target.value)} className="w-full p-2 rounded text-black"/>
      <input placeholder="Length" value={length} onChange={e=>setLength(e.target.value)} className="w-full p-2 rounded text-black"/>
      <input placeholder="Weight" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full p-2 rounded text-black"/>
      <input placeholder="Bait/Lure/Fly" value={bait} onChange={e=>setBait(e.target.value)} className="w-full p-2 rounded text-black"/>
      <textarea placeholder="Notes / Journal" value={notes} onChange={e=>setNotes(e.target.value)} className="w-full p-2 rounded text-black"/>
      <input type="file" onChange={e=>setPhoto(e.target.files[0])}/>
      <button type="submit" className="bg-green-500 p-2 rounded font-bold w-full">Log Trip & Earn Points</button>
    </form>
  )
}
