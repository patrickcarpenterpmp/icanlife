'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FishPage() {
  const [points, setPoints] = useState(0)
  const [badges, setBadges] = useState(['First Catch 🐟'])

  const handleLog = () => {
    setPoints(points + 25)
    badges.length === 1 && setBadges([...badges, '5lb Club 🏆'])
    if (typeof window !== 'undefined') {
      const { confetti } = require('canvas-confetti')
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
    }
    alert('Catch logged! +25 points & badge unlocked! 🎉')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 text-center shadow-2xl"
      >
        <h1 className="text-6xl font-black uppercase tracking-widest mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          I FISH LIFE
        </h1>
        <p className="text-xl opacity-90">Log Catches. Share Reels. Earn Badges.</p>
      </motion.header>

      {/* Timeline */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-8"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Live Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-slate-800 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-2 text-cyan-400">@JohnTheAngler</h3>
            <p className="mb-4 opacity-90">5.2lb largemouth on topwater. Water 68°F.</p>
            <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl mb-4 relative overflow-hidden cursor-pointer hover:scale-105 transition">
              <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">Reel Video</p>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="opacity-70">Likes: 156 | Comments: 23</span>
              <span className="text-cyan-400 font-bold">+50 pts</span>
            </div>
            <button className="mt-2 w-full bg-cyan-500 text-black py-2 rounded-xl font-bold hover:bg-cyan-400 transition">❤️ Like</button>
          </motion.div>
          {/* Add 2 more posts like this */}
        </div>
      </motion.section>

      {/* Reels */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="p-8 bg-slate-900"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Suggested Reels</h2>
        <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory">
          <motion.div 
            className="reel snap-center flex-shrink-0 w-80 h-96 rounded-2xl relative overflow-hidden cursor-pointer bg-gradient-to-b from-blue-900 to-black"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert('Swiped to next reel!')}
          >
            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-black bg-opacity-30">Epic Bass Reel</p>
          </motion.div>
          {/* Add 2 more reels */}
        </div>
      </motion.section>

      {/* Logging */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="p-8"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Log Your Catch</h2>
        <motion.div 
          className="bg-slate-800 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <form onSubmit={(e) => { e.preventDefault(); handleLog(); }}>
            <input type="text" placeholder="Session Title" className="w-full p-4 mb-4 rounded-xl bg-slate-700 border border-slate-600 text-white" required />
            <input type="text" placeholder="Location" className="w-full p-4 mb-4 rounded-xl bg-slate-700 border border-slate-600 text-white" required />
            <select className="w-full p-4 mb-4 rounded-xl bg-slate-700 border border-slate-600 text-white" required>
              <option>Select Species</option>
              <option>Bass</option>
              <option>Trout</option>
            </select>
            <input type="number" placeholder="Weight (lbs)" className="w-full p-4 mb-4 rounded-xl bg-slate-700 border border-slate-600 text-white" required />
            <textarea placeholder="Story..." rows="4" className="w-full p-4 mb-4 rounded-xl bg-slate-700 border border-slate-600 text-white"></textarea>
            <input type="file" multiple className="w-full p-4 mb-4 rounded-xl bg-slate-700 border border-slate-600 text-white" />
            <div className="h-64 rounded-xl overflow-hidden mb-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae!2sSan Francisco, CA!5e0!3m2!1sen!2sus!4v1630000000000" className="w-full h-full" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold text-xl hover:from-cyan-600 hover:to-blue-700 transition">
              Log Catch & Earn 25 Points 🎣
            </button>
          </form>
          <p className="text-center mt-4 text-cyan-400 font-bold">Total Points: {points}</p>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {badges.map((badge, i) => (
              <motion.span 
                key={i}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-3 py-1 rounded-full font-bold text-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Profile */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-8 bg-slate-900"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Your Profile</h2>
        <motion.div 
          className="bg-slate-800 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 text-cyan-400">@YourAnglerName</h3>
            <p className="mb-4 opacity-90">Bio: Chasing PB's on every cast. 50+ species logged.</p>
            <p className="mb-4 text-xl">Sessions: 42 | Points: {points} | Streak: 7 days</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {badges.map((badge, i) => (
                <motion.span 
                  key={i}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-3 py-1 rounded-full font-bold text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
            <p className="mb-2 text-sm opacity-70">Following: 23 | Followers: 87</p>
            <p className="text-cyan-400 text-sm font-semibold">Suggested: @LocalFlyGuy, @TahoeTroutMasters</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Your Timeline</h4>
            <div className="space-y-4">
              <motion.div 
                className="bg-slate-700 p-4 rounded-xl hover:bg-slate-600 transition cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <p className="font-semibold">4lb trout - Fly only</p>
                <p className="text-sm opacity-70">Lake Tahoe | +30 points</p>
              </motion.div>
              <motion.div 
                className="bg-slate-700 p-4 rounded-xl hover:bg-slate-600 transition cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <p className="font-semibold">Monster Bass PB</p>
                <p className="text-sm opacity-70">Clear Lake | Badge Unlocked</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Leaderboard */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="p-8"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">Local Heroes Leaderboard</h2>
        <motion.div 
          className="bg-slate-800 rounded-3xl p-8 shadow-2xl max-w-md mx-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <ol className="space-y-4">
            <motion.li 
              className="flex justify-between p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded-xl font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
            >
              <span>@JohnTheAngler</span>
              <span>2,500 pts</span>
            </motion.li>
            <motion.li 
              className="flex justify-between p-4 bg-slate-700 rounded-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
            >
              <span>@You</span>
              <span>{points} pts</span>
            </motion.li>
            <motion.li 
              className="flex justify-between p-4 bg-slate-700 rounded-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.6 }}
            >
              <span>@SarahReels</span>
              <span>1,800 pts</span>
            </motion.li>
          </ol>
          <motion.button 
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black py-3 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-700 transition"
            whileHover={{ scale: 1.02 }}
          >
            Challenge a Friend
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  )
}

function handleLog() {
  // Mock - add Supabase later
  console.log('Catch logged!')
}
