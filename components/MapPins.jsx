import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function MapPins({ entries }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  if(!isLoaded) return <p>Loading Map...</p>;

  return (
    <div className="w-full h-96 mb-8">
      <GoogleMap mapContainerStyle={{width:"100%", height:"100%"}} center={{lat:39.5,lng:-98.35}} zoom={4}>
        {entries.map(e=>(
          <Marker key={e.id} position={e.location}/>
        ))}
      </GoogleMap>
    </div>
  )
}
