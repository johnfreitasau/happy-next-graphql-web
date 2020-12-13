import React from 'react';
import Link from 'next/link';
import MapMarkerImg from '../assets/map-marker.svg';
import {FiPlus}from 'react-icons/fi';

import {Container,StyledLink} from '../styles/pages/Map';


const Map: React.FC = () => (
    <Container>
      <aside>
        <header>
          <MapMarkerImg />
          <h2>Choose an orphanage in the map</h2>
          <p>There are lots of children waiting for your visit. :)</p>
        </header>

        <footer>
          <strong>Sydney</strong>
          <span>NSW</span>
        </footer>

        <div></div>

        <Link href="" passHref>
          <StyledLink>
          <FiPlus />
          </StyledLink>
        </Link>
      </aside>
    </Container>
  );

export default Map;
