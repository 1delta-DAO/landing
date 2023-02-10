import { Row, Col } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import Slide from 'react-reveal/Slide';

import SvgIcon from '../../../common/SvgIcon';
import { ButtonLight, ButtonLightLink } from '../../Buttons';
import { HeroContent } from '../../Containers';
import { ButtonDark } from '../../elements/Button';
import Image from '../../elements/Image';
import BoxScene from '../../scene/Box';
import Triangles from '../../scene/Triangles';
import { PrimaryLight } from '../../Text';

import * as S from './styles';

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <S.LefttBlockContainer>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon
              src={icon}
              className='about-block-image'
              width='100%'
              height='100%'
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{title}</h6>
              <S.Content>{content}</S.Content>
              <S.ServiceWrapper>
                <Row type='flex' justify='space-between'>
                  {section &&
                    typeof section === 'object' &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width='60px' height='60px' />
                          <S.MinTitle>{item.title}</S.MinTitle>
                          <S.MinPara>{item.content}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LefttBlockContainer>
  );
};

export default LeftContentBlock;


export const HeroBlock = ({ id }) => {
  return (
    <S.LefttBlockContainer>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BoxScene height={'300px'} width={'300px'} />
            </div>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6> The <PrimaryLight>1Delta</PrimaryLight> Protocol</h6>

              <div style={{ display: 'flex', flexDirection: 'column' , alignItems:'center'}}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  A {' '}
                  <PrimaryLight style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                    decentralized crypto margin broker
                  </PrimaryLight>
                </div>
                connecting the best decentralized exchanges with the most liquid lending protocols.
              </div>
              <S.ServiceWrapper>
                <HeroContent>
                  <div className="container-xs" >

                    <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      We have a beta deployment on
                      <div style={{ display: 'flex', flexDirection: 'row', width: '120px', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                          src={require('./../../../assets/images/polygon.svg')}
                          alt="Polygon"
                          width={30}
                          height={30}
                        />
                        <div className="text-color-base-intense" style={{ fontWeight: 'bold' }} >
                          Polygon
                        </div>
                      </div>{' '}
                      <div>
                        and testnet deployments on Goerli
                        and Polygon Mumbai
                      </div>
                    </div>
                    <div className="reveal-from-bottom" data-reveal-delay="600">
                      <ButtonGroup>
                        <ButtonLightLink tag='a' target="_blank" wideMobile href="https://app.1delta.io/">
                          Get started
                        </ButtonLightLink>

                      </ButtonGroup>
                    </div>
                  </div>
                </HeroContent>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LefttBlockContainer>
  );
};



export const DeltaBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <S.LefttBlockContainer>
      <BoxScene height={'200px'} width={'200px'} />
    </S.LefttBlockContainer>
  );
};
