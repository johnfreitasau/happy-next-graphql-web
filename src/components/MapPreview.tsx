import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

interface MapProps {
  location: {latitude: number, longitude: number}
}

const mapIcon = Leaflet.icon({
  iconUrl: '/assets/map-marker.svg',
  iconSize: [58,68],
  iconAnchor: [29,68]
})

const MapPreview: React.FC<MapProps> = ({location}) => {

    return (
      <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={16}
      style={{ width: '100%', height: 280 }}
    >
      <Marker interactive={false} icon={mapIcon} position={[location.latitude, location.longitude]} />
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}/>
    </MapContainer>
    );
}

export default MapPreview;
