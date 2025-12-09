export default function SocialShare({ url }) {
  return (
    <div className="flex gap-4 mt-4">
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank">FB</a>
      <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank">X</a>
      <a href={`https://www.instagram.com/?url=${url}`} target="_blank">IG</a>
    </div>
  )
}
