import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

// import {LeafletContainerStyle} from '../styles/pages/components/map';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { useOrphanagesQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

interface mapProps {

}

interface orphanagesProps {

}

// const REGISTER_MUT = `
// query {
//   orphanages{
//     id,,
//     name,
//     latitude,
//     longitude,
//     about,
//     instructions,
//     openingHours,
//     openOnWeekends
//   }
// }
// `;

const mapIcon = Leaflet.icon({
  iconUrl: '/assets/map-marker.svg',
  iconSize: [58,68],
  iconAnchor: [29,68]
})

const Map: React.FC<mapProps> = ({}) => {

    const orphanages = useOrphanagesQuery();


// async function handleOnClick() {
//   const response = await orphanages();
//   response.data?.orphanages;
// }

  // async function car {
  //   const response = await orphanages();
  //   response.;
  //   if (response.data)
  //   console.log(orphanages);
  // }


    return (


        <MapContainer
          center={[-33.71606747297306, 150.97515317055928]}
          zoom={31}
          style={{ width: '100%', height: '100%' }}
        >

          <Marker
            icon={mapIcon}
            position={[-33.71606747297306, 150.97515317055928]}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >

              Lar das
              <Link href="/orphanages/1" passHref>
                <div>
                  <FiArrowRight size={20} color="#fff"/>
                </div>
              </Link>

            </Popup>
          </Marker>


          {/* Option 1 <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}/>
        </MapContainer>


    );
}

export default withApollo({ ssr: true })(Map);
//export default Map;
