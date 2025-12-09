import { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import JournalEntryForm from "../../components/JournalEntryForm";
import PointsLeaderboard from "../../components/PointsLeaderboard";
import MapPins from "../../components/MapPins";

export default function FishPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "journalEntries"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEntries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 text-white p-6">
      <h1 className="text-5xl font-bold text-center mb-6">I FISH LIFE</h1>
      <JournalEntryForm verb="fish" />
      <MapPins entries={entries} />
      <PointsLeaderboard entries={entries} />
    </div>
  );
}
