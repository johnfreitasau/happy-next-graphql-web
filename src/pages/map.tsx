import React from 'react';
import Link from 'next/link';
import {FiPlus}from 'react-icons/fi';
import {MapContainer, TileLayer} from 'react-leaflet';
import dynamic from 'next/dynamic';

import MapMarkerImg from '../assets/map-marker.svg';
import {Container,StyledLink} from '../styles/pages/Map';
//import {Map} from '../components/map';


const DynamicMap = dynamic(() => import('../components/map'))

function OrphanageMap() {
  return(
    <Container>
      <aside>
        <header>
          <MapMarkerImg />
          <h2>Choose an orphanage in the map</h2>
          <p>There are lots of children waiting for your visit. </p>
        </header>

        <footer>
          <strong>Sydney</strong>
          <span>NSW</span>
        </footer>
        <Link href="" passHref>
          <StyledLink>
          <FiPlus />
          </StyledLink>
        </Link>
      </aside>
      <DynamicMap />
    </Container>
  )};



export default OrphanageMap;


