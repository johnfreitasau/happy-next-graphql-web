import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

interface mapProps {

}

const Map: React.FC<mapProps> = ({}) => {
    return (

        <MapContainer
          center={[-33.71606747297306, 150.97515317055928]}
          zoom={31}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>

    );
}

export default Map;
