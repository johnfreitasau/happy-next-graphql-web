import { useRouter } from 'next/router'

import {
  Container,
  Content,
  OrphanageContent
} from '../../styles/pages/orphanages/Orphanage'
import Sidebar from '../../components/Sidebar'
import { FaWhatsapp } from 'react-icons/fa'
import { FiInfo, FiClock } from 'react-icons/fi'
import dynamic from 'next/dynamic';
import { useFindOrphanageByIdQuery, useOrphanagesQuery } from '../../generated/graphql'
import { withApollo } from '../../utils/withApollo'
import Link from 'next/link';
import Image from 'next/image';

const DynamicMap = dynamic(() => import('../../components/MapPreview'), {ssr: false})

  function Orphanage() {

  const router = useRouter();

  const {data, error, loading} = useFindOrphanageByIdQuery({
    variables: {
      id: String(router.query.id),
    }
  });

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (!data?.findOrphanageById) {
    return (
      <div>Could not find the orphanage.</div>
    )
  }

  return (
    <Container>
      <Sidebar />

      <Content>
        <div>
          <Image
              src="/assets/help2.jpg"
              alt="Logo"
              objectFit={"cover"}
              width={900}
              height={200}
            />
          <OrphanageContent>
            <h1>{data?.findOrphanageById?.name}</h1>


            <p>Email: {data?.findOrphanageById?.email}</p>

            <p>Phone: {data?.findOrphanageById?.whatsapp}</p>

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
            <Link
              href={`https://api.whatsapp.com/send/?phone=${data?.findOrphanageById?.whatsapp}&text=Hi+${data?.findOrphanageById?.name}+How+are+you+%3F&app_absent=0`}
            >
              <a target="_blank">
                <div className="contact-button">
                  <FaWhatsapp size={20} color="#FFF" />
                  Get in touch
                </div>
              </a>
            </Link>
          </OrphanageContent>
        </div>
      </Content>
    </Container>
  )
}

export default withApollo({ ssr: false })(Orphanage);
