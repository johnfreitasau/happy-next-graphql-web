import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

// import {LeafletContainerStyle} from '../styles/pages/components/map';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

interface mapProps {

}

const mapIcon = Leaflet.icon({
  iconUrl: '/assets/map-marker.svg',
  iconSize: [58,68],
  iconAnchor: [29,68]
})

const MapPreview: React.FC<mapProps> = ({}) => {
    return (
      <MapContainer
      // interactive={false}
      // center={[orphanage.latitude, orphanage.longitude]}
      center={[-33.71606747297306, 150.97515317055928]}
      zoom={16}
      style={{ width: '100%', height: 280 }}
    >
      {/* <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]} /> */}
      <Marker interactive={false} icon={mapIcon} position={[-33.71606747297306, 150.97515317055928]} />
      <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}/>
    </MapContainer>


    );
}

export default MapPreview;
