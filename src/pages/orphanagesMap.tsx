import React from 'react';
import Link from 'next/link';
import {FiPlus}from 'react-icons/fi';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import dynamic from 'next/dynamic';
import Image from 'next/image'

import {Container,StyledLink} from '../styles/pages/OrphanagesMap';
import { useMutation } from 'urql';
//import {Map} from '../components/map';



const DynamicMap = dynamic(() => import('../components/Map'), {ssr: false})

function OrphanagesMap() {

  return(

    <Container>
      <aside>
        <header>
          <Image
            src="/assets/map-marker.svg"
            alt="Picture of the author"
            width={70}
            height={70}
          />
          <h2>Choose an orphanage in the map</h2>
          <p>There are lots of children waiting for your visit. </p>
        </header>

        <footer>
          <strong>Sydney</strong>
          <span>NSW</span>
        </footer>
        <Link href="/orphanages/create" passHref>
          <StyledLink>
          <FiPlus />
          </StyledLink>
        </Link>
      </aside>
      <DynamicMap />
    </Container>
  )};



export default OrphanagesMap;


