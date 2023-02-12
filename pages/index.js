import GlobalStyles from '../components/GlobalStyles';

// Page components
import Header from '../components/Header';
// import Footer from '../components/Footer';
// import path from 'path';
// import dotenv from 'dotenv';
// Block Components
import ContentBlock from '../components/ContentBlock';
import MiddleBlock, { CtaMiddleBlock, HeaderMiddleBlock, MiddleBlockWithTiles } from '../components/MiddleBlock';
import DeltaHeader from '../components/layout/Header';
// Common
import { BackgroundNoodle, BackgroundTriangle } from '../components/Containers';
// import Triangles from '../components/scene/Triangles';
import Footer from '../components/Footer';
import NoodleScene from '../components/scene/NoodleScene';
import { useState } from 'react';
import { ButtonLight, ButtonWhite } from '../components/Buttons';
import Link from 'next/link';
// dotenv.config({ path: path.join(__dirname, '../.env') });


const Home = () => {
  return (
    <>
      <BackgroundNoodle isFocused>
        <NoodleScene inForeground />
      </BackgroundNoodle>

      <ButtonWhite style={{ width: '200px', height: '50px', position: 'absolute', left: '45%', bottom: '10%' }}>
        <Link href={"/home"}>
          Learn More
        </Link>
      </ButtonWhite> :
    </>
  );
};

export default Home;
