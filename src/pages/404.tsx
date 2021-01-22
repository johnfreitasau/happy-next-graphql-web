import React from 'react';
import Head from 'next/head';
import {FiArrowLeft} from 'react-icons/fi';

import {Container, ContainerWrapper, Link} from '../styles/pages/404';


export default function NotFound() {
  return (
    <Container>
    <ContainerWrapper>
      <Head>
        <title>Happy</title>
      </Head>
      <img src="/assets/logo.svg" alt="Logo"/>
        <h1>404 :(</h1>
        <p>This is not the web page you are looking for.</p>
      <Link href='/orphanagesMap'>
        <FiArrowLeft size={26} color="rgba(0,0,0,0.6)"/>
      </Link>
    </ContainerWrapper>
    </Container>
  )
}
