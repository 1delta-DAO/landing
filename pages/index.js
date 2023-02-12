// Common
import { BackgroundNoodle } from '../components/Containers';
import NoodleScene from '../components/scene/NoodleScene';
import { ButtonToAppLarge, ButtonWhite } from '../components/Buttons';
import Link from 'next/link';
import { BottomBar, TopBar } from '../components/Bars';


const Home = () => {
  return (
    <section style={{overflow: 'hidden'}}>
      <BackgroundNoodle isFocused>
        <NoodleScene inForeground />
      </BackgroundNoodle>

      <TopBar>
        <ButtonToAppLarge style={{ width: '220px', height: '40px' }} >
          <Link href={"https://app.1delta.io/"} >
            Directly to App
          </Link>
        </ButtonToAppLarge>

      </TopBar>

      <BottomBar>
        <ButtonWhite style={{ width: '200px', height: '50px' }} >
          <Link href={"/home"}>
            Learn More
          </Link>
        </ButtonWhite>

      </BottomBar>
    </section>
  );
};

export default Home;
