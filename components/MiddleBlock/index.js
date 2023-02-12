import { Row, Col } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';

import { ButtonLight, ButtonLightLink } from '../Buttons';
import { FeaturesTilesItemImage, HeroContent, OverlappingImageContainer, SingleTile, TileContent, TileHeader, TilesContainer } from '../Containers';
import Image from '../elements/Image';
import { PrimaryLight } from '../Text';
import * as S from './styles';
import { CheckCircle } from 'react-feather';
import Modal from '../elements/Modal';
import { ButtonBright } from '../Buttons';
import { useRef, useState } from 'react';
import { useOutsideAlerter } from '../../utils/outsideAlerter';
import styled from 'styled-components';

const TxtBlock=styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-size: 20px;
@media screen and (max-width: 450px) {
  flex-direction: column;
}

`

const Title = styled(S.Title)`
@media screen and (max-width: 450px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  font-size: 30px;
}
`

const MiddleBlock = ({ title, content }) => {
  return (
    <S.MiddleBlock>
      <Row type='flex' justify='center' align='middle'>
        <S.ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
          </Col>
        </S.ContentWrapper>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;

const fontSize = '20px'

export const HeaderMiddleBlock = () => {
  return (
    <S.MiddleBlock>
      <Row type='flex' justify='center' align='middle'>
        <S.ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Title>The <PrimaryLight style={{fontWeight:'bold'}}>1Delta</PrimaryLight> Protocol</Title>
            <S.ContentDiv>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize }}>
                <TxtBlock>
                  1Delta is a {' '}
                  <PrimaryLight style={{ fontWeight: 'bold', marginLeft: '5px', fontSize }}>
                    decentralized crypto margin broker
                  </PrimaryLight>
                </TxtBlock>
                connecting the best decentralized exchanges with the most liquid lending protocols.
              </div>

              <div data-reveal-delay="400" style={{
                marginTop: '20px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize
              }}>
                We have a beta deployment on
                <div style={{ display: 'flex', flexDirection: 'row', width: '120px', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src={require('./../../assets/images/polygon.svg')}
                    alt="Polygon"
                    width={30}
                    height={30}
                  />
                  <div style={{ fontWeight: 'bold', marginLeft: '10px' }} >
                    Polygon
                  </div>
                </div>{' '}
                <div>
                  and testnet deployments on Goerli
                  and Polygon Mumbai
                </div>
              </div>

              <ButtonLightLink tag='a' target="_blank" wideMobile href="https://app.1delta.io/" >
                <ButtonLight style={{ marginTop: '20px', width: '200px', fontWeight: 'bold', height: '40px' }}>
                  Get started
                </ButtonLight>
              </ButtonLightLink>
            </S.ContentDiv>
          </Col>
        </S.ContentWrapper>
      </Row>
    </S.MiddleBlock>
  );
};


export const MiddleBlockWithTiles = ({ title, content }) => {
  return (
    <S.MiddleBlock>
      <div style={{ display: 'flex', flexDirection: 'column' }} >
        <Row type='flex' justify='center' align='middle'>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <S.Title>{title}</S.Title>
              <S.Content>{content}</S.Content>
            </Col>
          </S.ContentWrapper>
        </Row>

        <TilesContainer>

          <SingleTile>
            <TileContent>
              <FeaturesTilesItemImage style={{ padding: '5px' }}>
                <Image
                  src={require('./../../assets/images/bar-chart.svg')}
                  alt="Features tile icon 01"
                  width={64}
                  height={64} />
              </FeaturesTilesItemImage>
              <div className="features-tiles-item-content">
                <TileHeader>
                  Instant Leverage
                </TileHeader>
                <p className="m-0 text-sm">
                  Use flash swaps through Uniswap V3 to directly borrow and supply on margin.
                </p>
              </div>
            </TileContent>
          </SingleTile>

          <SingleTile data-reveal-delay="200">
            <TileContent>
              <FeaturesTilesItemImage style={{ padding: '5px' }}>
                <Image
                  src={require('./../../assets/images/activity.svg')}
                  alt="Features tile icon 02"
                  width={64}
                  height={64} />
              </FeaturesTilesItemImage>
              <div className="features-tiles-item-content">
                <TileHeader>
                  Prevent Liquidations
                </TileHeader>
                <p className="m-0 text-sm">
                  You can self-liquidate in a single click - no penalties or manual withdrawals.
                </p>
              </div>
            </TileContent>
          </SingleTile>

          <SingleTile data-reveal-delay="400">
            <TileContent>
              <OverlappingImageContainer style={{ padding: '5px' }}>
                <div style={{
                  marginLeft: '100px',
                  marginRight: '0px'
                }}>
                  <Image
                    src={require('./../../assets/images/compound-logo.svg')}
                    alt="Features tile icon 03"
                    width={64}
                    height={64} />
                </div>
                <div style={{
                  marginRight: '100px',
                  marginLeft: '-20px'
                }}>
                  <Image
                    src={require('./../../assets/images/uni-logo.svg')}
                    alt="Features tile icon 03"
                    width={64}
                    height={64}
                  />
                </div>
              </OverlappingImageContainer>
              <div className="features-tiles-item-content">
                <TileHeader>
                  Trade with the Best
                </TileHeader>
                <p className="m-0 text-sm">
                  We connect the best exchanges like Uniswap with the most liquid lenders like Compound.
                </p>
              </div>
            </TileContent>
          </SingleTile>

          <SingleTile>
            <TileContent>
              <FeaturesTilesItemImage style={{ padding: '5px' }}>
                <Image
                  src={require('./../../assets/images/globe.svg')}
                  alt="Features tile icon 04"
                  width={64}
                  height={64} />
              </FeaturesTilesItemImage>
              <div className="features-tiles-item-content">
                <TileHeader>
                  No Centralization
                </TileHeader>
                <p className="m-0 text-sm">
                  History has shown that centralized brokers can't be trusted - 1Delta is the first decentralized broker that doesn't depend on its own liquidity.
                </p>
              </div>
            </TileContent>
          </SingleTile>

          <SingleTile data-reveal-delay="200">
            <TileContent>
              <FeaturesTilesItemImage style={{ padding: '5px' }}>
                <Image
                  src={require('./../../assets/images/coffee.svg')}
                  alt="Features tile icon 05"
                  width={64}
                  height={64} />
              </FeaturesTilesItemImage>
              <div className="features-tiles-item-content">
                <TileHeader>
                  Easy to use
                </TileHeader>
                <p className="m-0 text-sm">
                  If you've used Uniswap or Compound then you'll feel right at home. 1Delta provides traders a familiar experience with minimal onboarding.
                </p>
              </div>
            </TileContent>
          </SingleTile>

          <SingleTile data-reveal-delay="400">
            <TileContent>
              <FeaturesTilesItemImage style={{ padding: '5px' }}>
                <Image
                  src={require('./../../assets/images/tool.svg')}
                  alt="Features tile icon 06"
                  width={64}
                  height={64} />
              </FeaturesTilesItemImage>
              <div className="features-tiles-item-content">
                <TileHeader>
                  Asset Management
                </TileHeader>
                <p className="m-0 text-sm">
                  You can optionally delegate access to your accounts so that an asset manager can safely trade on your behalf.
                </p>
              </div>
            </TileContent>
          </SingleTile>

        </TilesContainer>

      </div>
    </S.MiddleBlock>
  );
};


const FormCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`

const FormRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 5px;
width: 100%;
`

const emailKey = process.env.REACT_APP_EMAIL_KEY
const templateKey = process.env.REACT_APP_EMAIL_TEMPLATE_KEY
const publicKey = process.env.REACT_APP_PUBLIC_KEY

function ModalContent(props) {

  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [contactData, setContactData] = useState({ ...initialFormState });
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        emailKey,
        templateKey,
        e.target,
        publicKey,
      )
      .then(
        (result) => {
          setLoading(false)
          console.log(result.text);
          if (result.text.toLowerCase() === 'ok')
            setSuccess(true)
        },
        (error) => {
          setLoading(false)
          console.log(error.text);
          setError(error.text)
        },
      );

    //reset the form after submission
    setContactData({ ...initialFormState });
  };

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      ref={props.ref}>
      <h2 className="text-color-primary-light" style={{ textAlign: 'center' }}>{!success ? "Let's talk!" : 'Thank you for reaching out!'}</h2>
      {!success && <p style={{ width: '90%', textAlign: 'center' }}>Tell us how we can help you or how we could do business together.</p>
      }

      {!error && !success && !loading && <>
        <form onSubmit={handleSubmit} style={{ width: '90%' }}>
          <FormCol>
            <FormRow>
              <label htmlFor="name" style={{ width: '50px' }}>Name:</label>
              <input
                type="text"
                className="form-input"
                name="name"
                value={contactData.name}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#DEE1FF', width: '70%', borderRadius: '7px', height: '40px' }}
              />
            </FormRow>
            <FormRow>
              <label htmlFor="email" style={{ width: '50px' }}>Email:</label>
              <input
                type="email"
                className="form-input"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#DEE1FF', width: '70%', borderRadius: '7px', height: '40px' }}
              />
            </FormRow>
          </FormCol>
          <div className="row" style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <label htmlFor="message" style={{textAlign:'left'}}>Your message to us:</label>
              <textarea
                className="form-input"
                type="text"
                name="message"
                maxLength="6000"
                rows="7"
                value={contactData.message}
                onChange={handleChange}
                required
                style={{ backgroundColor: '#DEE1FF', borderTopLeftRadius: '7px', borderTopRightRadius: '7px', borderBottomLeftRadius: '7px', width: '90%' }}
              ></textarea>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ButtonLight type="submit" style={{ width: '200px', height: '40px', fontWeight: 'bold' }}>
              Send!
            </ButtonLight>
          </div>

        </form>
      </>}
      {loading && <div
        className="container-sm"
        style={{ display: 'flex', direction: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '7px', height: '120px' }}>
        <div>
          <div className="m-0 text-color-transition-avg">
            Sending message
          </div>
          <div className="snippet" data-title="dot-windmill"
            style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <div className="stage"
              style={{ display: 'flex', flexDirection: 'center', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
              <div className="dot-windmill"></div>
            </div>
          </div>
        </div>
      </div>}
      {!error && success && <div className="container-sm"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '7px' }}
      ><br />
        <CheckCircle color='rgba(108, 255, 204, 1)' size={50} style={{ filter: 'drop-shadow(3px 5px 2px rgba(108, 255, 204, 0.5))', marginTop: '10px' }} />
        <br />
        <div className="m-0 text-color-transition-avg">
          Success!
        </div>
        <br />
        <div className="m-0 text-color-transition-avg" style={{ textAlign: 'center', marginBottom: '10px' }}>
          Stay tuned - We will reply as soon as we can.
        </div>
        <br />
      </div>
      }
      {error && <div
        className="container-sm"
        style={{ display: 'flex', direction: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '7px', height: '100px' }}>
        <div className="m-0 text-color-transition-avg" style={{ fontSize: '14px', textAlign: 'center' }}>
          Error: {error}
        </div>
      </div>}
    </div>
  );
}

export const CtaMiddleBlock = () => {
  const [showModal, setShowModal] = useState(false)
  const ref = useRef(null)
  const action = () => setShowModal(false)
  useOutsideAlerter(ref, action)

  return (
    <S.MiddleBlock>
      <Row type='flex' justify='center' align='middle'>
        <S.ContentWrapper>
          <Modal show={showModal} handleClose={() => setShowModal(false)} ref={ref} >
            {ModalContent({ ref })}
          </Modal>
          <div>
            <h3 >
              Get in touch
            </h3>
            <p >
              Want to get in touch for business or other inquiries?
            </p>
            <p >
              We'd love to hear from you!
            </p>
          </div>
          <div className="cta-action" >
            <ButtonLight onClick={() => setShowModal(true)} style={{ width: '200px', height: '40px', fontWeight: 'bold' }}>
              Contact Us!
            </ButtonLight>
            {/* <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your email"
              style={{ backgroundColor: '#DEE1FF' }}>
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#8C0F49" />
              </svg>
            </Input> */}
          </div>
        </S.ContentWrapper>
      </Row>
    </S.MiddleBlock>
  );
};