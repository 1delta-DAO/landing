// Common
import { BackgroundNoodle } from '../components/Containers';
import NoodleScene from '../components/scene/NoodleScene';
import { ButtonToAppLarge, ButtonWhite } from '../components/Buttons';
import Link from 'next/link';
import { BottomBar, TopBar } from '../components/Bars';
import styled from 'styled-components';


const LinkTop = styled(Link)`
&:hover {
color: white;
}
`

const LinkBottom = styled(Link)`
&:hover {
color: #C41969;
}
`

const Home = () => {
  return (
    <section style={{overflow: 'hidden'}}>
      <BackgroundNoodle isFocused>
        <NoodleScene inForeground />
      </BackgroundNoodle>

      <TopBar>
        <ButtonToAppLarge style={{ width: '220px', height: '40px' }} >
          <LinkTop href={"https://app.1delta.io/"} >
            Directly to App
          </LinkTop>
        </ButtonToAppLarge>

      </TopBar>

      <BottomBar>
        <ButtonWhite style={{ width: '200px', height: '50px' }} >
          <LinkBottom href={"/home"}>
            Learn More
          </LinkBottom>
        </ButtonWhite>

      </BottomBar>
    </section>
  );
};

export default Home;
