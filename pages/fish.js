import JournalEntryForm from "../components/JournalEntryForm";
import MapPins from "../components/MapPins";
import PointsLeaderboard from "../components/PointsLeaderboard";
import SocialShare from "../components/SocialShare";
import Auth from "../components/Auth";

export default function FishPage() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold">I FISH LIFE</h1>
        <p className="text-2xl mt-4">Rep your waters, log your catch, and connect!</p>
      </section>

      {/* Authentication */}
      <Auth />

      {/* Journal Entry Form */}
      <JournalEntryForm />

      {/* Map Pins */}
      <MapPins />

      {/* Points Leaderboard */}
      <PointsLeaderboard />

      {/* Social Share Buttons */}
      <SocialShare />
    </div>
  );
}
