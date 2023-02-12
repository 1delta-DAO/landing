import GlobalStyles from '../components/GlobalStyles';
import ContentBlock from '../components/ContentBlock';
import  { CtaMiddleBlock, HeaderMiddleBlock, MiddleBlockWithTiles } from '../components/MiddleBlock';
import DeltaHeader from '../components/layout/Header';
import { BackgroundNoodle } from '../components/Containers';
import Footer from '../components/Footer';
import NoodleSceneBg from '../components/scene/NoodleSceneBg';


const Home = () => {
  return (
    <section style={{overflowY:'hidden'}}>
      <BackgroundNoodle isFocused={false}>
        <NoodleSceneBg />
      </BackgroundNoodle>

      <GlobalStyles />

      <DeltaHeader />

      <HeaderMiddleBlock />

      <MiddleBlockWithTiles
        title='Unified trading experience'
        content='No more switching between multiple web apps to manage your leveraged positions. 1Delta was built by traders with the goal of creating the best possible decentralized trading experience.'

      />

      <ContentBlock
        type='right'
        first='false'
        title='Manage your risk'
        content='The app gives you a full overview of your risk parameters. You can immediately see if you are at risk of liquidation so that you can take action.'
        button='button'
        icon='trim-panel.png'
        id='intro'
      />

      <ContentBlock
        type='left'
        first='false'
        title='Take on smart leverage'
        content='Features like one-click self-liquidation and health indicators ensure that you can safely leverage your positions to get the most out of your trades.'
        button='button'
        icon='top-panel.png'
        id='intro'
      />

      <ContentBlock
        type='right'
        first='false'
        title='Complexity reduced down to a single click'
        content='We unite the best of both worlds. Flash swaps allow you to execute collateral and debt swaps in a single click. You can also easily assess the impact of a trade on your account health before you execute.'
        button='button'
        icon='full-panel.png'
        id='intro'
      />

      <CtaMiddleBlock />
      <Footer />
    </section>
  );
};

export default Home;
