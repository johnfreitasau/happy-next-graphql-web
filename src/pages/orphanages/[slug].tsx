import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Props } from 'react';

import {Container, Content, Images} from '../../styles/pages/orphanages/Orphanage';
import Sidebar from '../../components/Sidebar';

interface OrphanageProps {
  orphanage: string;
}

export default function Orphanage({ orphanage }: OrphanageProps) {

  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  // console.log('PRODUCT:',product.data);
  console.log(orphanage);

  // return (
  //   <div>
  //     <h1>Orpahanage</h1>
  //   </div>
  // )

  return (
    <Container>
      <Sidebar />

      <Content>
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
          <div className="orphanage-details">
          <Images>
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </Images>

          <div className="orphanage-details-content">
            <h1>orphanage.name</h1>
            <p>orphanage.about</p>

            <div className="map-container">
              {/* <Map
                interactive={false}
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
              >
                <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map> */}

              <footer>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>orphanage.instructions</p>

            <div className="open-details">
              <div className="hour">
                {/* <FiClock size={32} color="#15B6D6" /> */}
                orphanage.opening_hours
              </div>
              {/* {orphanage.open_on_weekends ? ( */}
                <div className="open-on-weekends">
                  {/* <FiInfo size={32} color="#39CC83" /> */}
                  Atendemos <br />
                  fim de semana
                </div>
              {/* ) : ( */}
                <div className="open-on-weekends dont-open">
                  {/* <FiInfo size={32} color="#FF669D" /> */}
                  Não atendemos <br />
                  fim de semana
                </div>
              {/* )} */}
            </div>

            {/**<PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
              </PrimaryButton>*/}
          </div>
          </div>
      </Content>
    </Container>
  );

}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<OrphanageProps> = async (context) => {

  if (context.params) {
    const {slug} = context.params;

    console.log(slug);
  }

  const orphanage = 'Hello world';
  // const orphanage = await client().getByUID('product', String(slug), {})

  return {
    props: {
      orphanage,
    },
    revalidate: 60
  }
}
