'use client'
import { useEffect, useState } from 'react'

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
]

export default function Home() {
  const [currentVerb, setCurrentVerb] = useState(0)

  useEffect(() => {
    const flashHeader = () => {
      const verb = verbs[currentVerb]
      setCurrentVerb((prev) => (prev + 1) % verbs.length)
      setTimeout(flashHeader, verb.pause)
    }
    flashHeader()
  }, [currentVerb])

  const handleVerbChange = (verb: string) => {
    if (verb) window.location.href = `/${verb}`
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4">
      <h1 className="text-8xl md:text-9xl font-black uppercase tracking-widest mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        I {verbs[currentVerb].word} LIFE
      </h1>
      <p className="text-3xl uppercase text-gray-300 mb-8">What do you do?</p>
      <div className="flex items-center gap-6 mb-12">
        <span className="text-4xl font-black">I</span>
        <select 
          onChange={(e) => handleVerbChange(e.target.value)}
          className="text-2xl p-4 border-2 border-cyan-400 rounded-xl bg-transparent text-white cursor-pointer font-semibold"
        >
          <option value="" disabled selected>Choose</option>
          <option value="fish">FISH</option>
          <option value="hunt">HUNT</option>
          <option value="farm">FARM</option>
          <option value="hike">HIKE</option>
          <option value="lift">LIFT</option>
          <option value="golf">GOLF</option>
          <option value="bike">BIKE</option>
          <option value="climb">CLIMB</option>
          <option value="snow">SNOW</option>
          <option value="skate">SKATE</option>
          <option value="swim">SWIM</option>
          <option value="workout">WORKOUT</option>
          <option value="paddle">PADDLE</option>
          <option value="roam">ROAM</option>
          <option value="ball">BALL</option>
          <option value="surf">SURF</option>
        </select>
        <span className="text-4xl font-black">LIFE</span>
      </div>
      <footer className="absolute bottom-4 text-sm opacity-70 w-full text-center">
        &copy; 2025 I CAN LIFE. All rights reserved.
      </footer>
    </div>
  )
}
