import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

interface mapProps {
  label: string,
  location(latitude: number, longitude: number): any;
}

const mapIcon = Leaflet.icon({
  iconUrl: '/assets/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

const MapEdit: React.FC<mapProps> = ({ label, location }) => {
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,0
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log('position coords:',position.coords);
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const Markers = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);

        location(e.latlng.lat, e.latlng.lng);
      },
    });

    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
        icon={mapIcon}
      />
    ) : null;
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <MapContainer
        center={{ lat: -33.71606747297306, lng: 150.97515317055928 }}
        zoom={15}
        style={{ width: '100%', height: 280 }}
      >
        <Markers />

        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
        />
      </MapContainer>
    </>
  );
};

export default MapEdit;
