import React from 'react';
import Head from 'next/head';
import {FiArrowRight} from 'react-icons/fi';
import Image from 'next/image';

import {Container, ContainerWrapper, Location, Link} from '../styles/pages/Landing';
import { withApollo } from '../utils/withApollo';

const Home: React.FC = () => {
  return (
      <Container>
                  <div className="background">
            <Image
              alt="Landing"
              src="/assets/landing.svg"
              width="554"
              height="674"
              layout="fixed"
              objectFit="cover"
              quality={100}
            />
          </div>
        <ContainerWrapper>
          <Head>
            <title>Happy</title>
          </Head>

          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={240}
            height={74}
            layout="fixed"
          />

          <main>
            <h1>Spread happiness Into The World</h1>
            <p>Visit orphanages and change many children's day</p>
          </main>
          <Location>
            <strong>Sydney</strong>
            <span>NSW</span>
          </Location>
          <Link href='/orphanagesMap'>
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
        </ContainerWrapper>
    </Container>
  )
}

export default withApollo({ ssr: false })(Home);
