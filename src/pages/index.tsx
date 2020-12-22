import React from 'react';
import Head from 'next/head';
import {FiArrowRight} from 'react-icons/fi';

// import Logo from '../assets/logo.svg';

import {Container, ContainerWrapper, Location, Link} from '../styles/pages/Landing';

const Home: React.FC = () => {
  return (
      <Container>
        <ContainerWrapper>
          <Head>
            <title>Happy</title>
          </Head>
          <img src="/assets/logo.svg" alt="Logo"/>
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

export default Home;
