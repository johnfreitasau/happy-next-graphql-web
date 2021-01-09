import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { useOrphanagesQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

const mapIcon = Leaflet.icon({
  iconUrl: '/assets/map-marker.svg',
  iconSize: [58,68],
  iconAnchor: [29,68]
})

const Map: React.FC = ({}) => {

    const [currentPosition, setCurrentPosition] = useState<[number, number]>([
      -33.71606747297306, 150.97515317055928
    ]);

    const orphanages = useOrphanagesQuery();

    return (

        <MapContainer
          center={currentPosition}
          zoom={31}
          style={{ width: '100%', height: '100%' }}
        >
          {orphanages.data?.orphanages.map(orphanage =>

            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >

                {orphanage.name}
                <Link href={`/orphanages/${orphanage.id}`} passHref>
                  <div>
                    <FiArrowRight size={20} color="#fff"/>
                  </div>
                </Link>

              </Popup>
            </Marker>
          )}

          {/* Option 1 <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}/>
        </MapContainer>


    );
}

export default withApollo({ ssr: true })(Map);
