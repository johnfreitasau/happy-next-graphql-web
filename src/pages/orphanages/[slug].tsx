import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
// import { Props } from 'react'
// import Leaflet from 'leaflet';
// import { MapContainer, Marker, TileLayer } from "react-leaflet";

import {
  Container,
  Content,
  Images,
  OrphanageContent
} from '../../styles/pages/orphanages/Orphanage'
import Sidebar from '../../components/Sidebar'
import { FaWhatsapp } from 'react-icons/fa'
import { FiInfo, FiClock } from 'react-icons/fi'
import dynamic from 'next/dynamic';
import { useFindOrphanageByIdQuery, useOrphanagesQuery } from '../../generated/graphql'
import { withApollo } from '../../utils/withApollo'

interface OrphanageProps {
  orphanage: string
}


// const mapIcon = Leaflet.icon({
//   iconUrl: '/assets/map-marker.svg',
//   iconSize: [58,68],
//   iconAnchor: [29,68]
// })

const DynamicMap = dynamic(() => import('../../components/MapPreview'), {ssr: false})

//export default function Orphanage({ orphanage }: OrphanageProps) {
function Orphanage({ orphanage }: OrphanageProps) {

  const {data, error, loading} = useFindOrphanageByIdQuery({
    // skip: stringId === '-1',
    variables: {
      id: 'ed793ce3-c62b-4415-8c93-d6e4c3e7bb06'
    }
  });

  console.log('data?.findOrphanageById:',data?.findOrphanageById);
  console.log('data?.findOrphanageById?.name:',data?.findOrphanageById?.name);
  console.log('Loading:',loading);

  const router = useRouter()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <Container>
      <Sidebar />

      <Content>
        <div>
          <img
            src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
            alt="Lar das meninas"
          />

          <Images>
            <button className="active" type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
            <button type="button">
              <img
                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                alt="Lar das meninas"
              />
            </button>
          </Images>

          <OrphanageContent>
            {/* <div className="orphanage-details-content"> */}
            <h1>{data?.findOrphanageById?.name}</h1>
            <p>{data?.findOrphanageById?.about}</p>

            <div className="map-container">
              <DynamicMap />
              <footer>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${data?.findOrphanageById?.latitude},${data?.findOrphanageById?.longitude}`}
                >
                  See the route in Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Visit Instructions</h2>
            <p>{data?.findOrphanageById?.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                {data?.findOrphanageById?.openingHours}
              </div>
              {data?.findOrphanageById?.openOnWeekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Open on Weekends
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Open only on Weekdays
                </div>
              )}
            </div>
            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Get in touch
            </button>
            {/* </div> */}
            {/* </div> */}
          </OrphanageContent>
        </div>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<OrphanageProps> = async (
  context
) => {
  if (context.params) {
    const { slug } = context.params

    console.log(slug)
  }

  const orphanage = 'Hello world'
  // const orphanage = await client().getByUID('product', String(slug), {})

  return {
    props: {
      orphanage
    },
    revalidate: 60
  }
}

export default withApollo({ ssr: false })(Orphanage);
