export default function PointsLeaderboard({ entries }) {
  const points = {};
  entries.forEach(e => { points[e.uid] = (points[e.uid] || 0) + 10; });

  const sorted = Object.entries(points).sort((a,b)=>b[1]-a[1]);

  return (
    <div className="bg-blue-800 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <ul>
        {sorted.map(([uid, pts], i)=>(
          <li key={uid}>{i+1}. {uid} - {pts} pts</li>
        ))}
      </ul>
    </div>
  )
}
