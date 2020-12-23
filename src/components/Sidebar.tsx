import React from 'react';
import {useRouter} from 'next/router'
import { AsideContainer } from '../styles/pages/components/Sidebar';
// import { FiArrowLeft, FiSidebar } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
// import {AsideContainer} '../styles/pages/components/Sidebar';

export default function Sidebar() {

  const router = useRouter();

  return (
    <AsideContainer>
      <img src="/assets/map-marker.svg" alt="Happy" />

      <footer>
        <div onClick={() => router.back()}>
          <FiArrowLeft size={24} color="#FFF" />
        </div>
      </footer>
    </AsideContainer>
  );

}
