import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface MapViewProps {
  latitude: number;
  longitude: number;
}

function RecenterMap({ latitude, longitude }: MapViewProps) {
  const map = useMap();
  useEffect(() => {
    map.setView([latitude, longitude]);
  }, [latitude, longitude, map]);
  return null;
}

export function MapView({ latitude, longitude }: MapViewProps) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      scrollWheelZoom
      style={{ height: "400px", width: "60%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Coordenadas: {latitude.toFixed(4)}, {longitude.toFixed(4)}
        </Popup>
      </Marker>
      <RecenterMap latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
}
