// Common
import { BackgroundNoodle } from '../components/Containers';
import NoodleScene from '../components/scene/NoodleScene';
import { ButtonToAppLarge, ButtonWhite } from '../components/Buttons';
import Link from 'next/link';


const Home = () => {
  return (
    <>
      <BackgroundNoodle isFocused>
        <NoodleScene inForeground />
      </BackgroundNoodle>

      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '40px', top: '0%',
        background: 'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
    }}>
        <ButtonToAppLarge style={{ width: '220px', height: '40px' }} >
          <Link href={"https://app.1delta.io/"} >
            Directly to App
          </Link>
        </ButtonToAppLarge>

      </div>

      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '50px', bottom: '0%',
            background: 'rgba(255, 255, 255, 0.36)',
            backdropFilter: 'blur(10px)',
    }}>
        <ButtonWhite style={{ width: '200px', height: '50px' }} >
          <Link href={"/home"}>
            Learn More
          </Link>
        </ButtonWhite>

      </div>
    </>
  );
};

export default Home;
