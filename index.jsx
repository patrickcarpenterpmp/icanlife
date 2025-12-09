import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const verbs = [
  { word: "CAN", pause: 2500 },
  { word: "FISH", pause: 250 },
  { word: "HUNT", pause: 250 },
  { word: "FARM", pause: 250 },
  { word: "HIKE", pause: 250 },
  { word: "LIFT", pause: 250 },
  { word: "GOLF", pause: 250 },
  { word: "BIKE", pause: 250 },
  { word: "CLIMB", pause: 250 },
  { word: "SNOW", pause: 250 },
  { word: "SKATE", pause: 250 },
  { word: "SWIM", pause: 250 },
  { word: "PADDLE", pause: 250 },
  { word: "ROAM", pause: 250 },
  { word: "BALL", pause: 250 },
  { word: "SURF", pause: 250 },
  { word: "WORKOUT", pause: 250 },
  { word: "CAN", pause: 2500 }
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % verbs.length);
    }, verbs[current].pause);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold tracking-wider mb-8">
        I {verbs[current].word} LIFE
      </h1>
      <p className="text-2xl mb-12 uppercase">What do you do?</p>
      <div className="flex items-center gap-4">
        <span>I</span>
        <select
          className="bg-transparent border-2 border-white text-white text-2xl p-2 rounded"
          onChange={(e) => router.push(`/${e.target.value.toLowerCase()}`)}
        >
          <option disabled selected hidden></option>
          {verbs.slice(1, -1).map((v) => (
            <option key={v.word} value={v.word.toLowerCase()}>
              {v.word.charAt(0) + v.word.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
        <span>LIFE</span>
      </div>
      <footer className="absolute bottom-4 text-gray-400">&copy; 2025 I CAN LIFE. All rights reserved.</footer>
    </div>
  );
}
