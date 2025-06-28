import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = ({ artisans, onMarkerClick }) => {
  return (
    <MapContainer 
      center={[20.5937, 78.9629]} 
      zoom={4} 
      style={{ height: '100%', width: '100%', borderRadius: '0.75rem' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {artisans.map((artisan) => (
        <Marker 
          key={artisan._id} 
          position={[artisan.location.coordinates[1], artisan.location.coordinates[0]]}
          eventHandlers={{
            click: () => onMarkerClick(artisan),
          }}
        >
          <Popup>
            <div className="p-2">
              <h4 className="font-bold">{artisan.name}</h4>
              <p className="text-sm">{artisan.skills.join(', ')}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;