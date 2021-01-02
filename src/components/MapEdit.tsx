import Leaflet from 'leaflet';
// import {LeafletContainerStyle} from '../styles/pages/components/map';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

interface mapProps {
  latitude: number;
  longitude: number;
}

const mapIcon = Leaflet.icon({
  iconUrl: '/assets/map-marker.svg',
  iconSize: [58,68],
  iconAnchor: [29,68]
})

const MapEdit: React.FC<mapProps> = ({latitude, longitude, children}) => {

  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0,0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setInitialPosition([latitude, longitude]);

    });
}, []);

const Markers = () => {

  const map = useMapEvents({
      click(e) {
          setSelectedPosition([
              e.latlng.lat,
              e.latlng.lng
          ]);
      },
  })

  return (
      selectedPosition ?
          <Marker
          key={selectedPosition[0]}
          position={selectedPosition}
          interactive={false}
          icon={mapIcon}
          />
      : null
  )

}


    return (
        <MapContainer
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={15}
          style={{ width: '100%', height: 280 }}
        >
          <Markers />

          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}/>
        </MapContainer>

    );
}

export default MapEdit;
