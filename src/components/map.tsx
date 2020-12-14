import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';

// import {LeafletContainerStyle} from '../styles/pages/components/map';
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
          {/* Option 1 <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}/>
        </MapContainer>

    );
}

export default Map;
