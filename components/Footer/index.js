import { Fragment } from 'react';
import { Col } from 'antd';

import * as S from './styles';

// Common
import Container from '../../common/Container';
import FooterSocial from '../layout/partials/FooterSocial';
import Logo from '../layout/partials/DeltaLogo';
import styled from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

const FlexContainer = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
@media screen and (max-width: 414px) {
  flex-direction: column;
}
`

const FlexFloat = styled.div`
float: right;
@media screen and (max-width: 414px) {
  float: none;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}
`

const FlexFloatContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 400px;
@media screen and (max-width: 450px) {
  width: 100%;
  align-items: center;
}
`


const Footer = ({ t }) => {
  const windowSize = useWindowSize()

  const isMobile = windowSize.width < 450


  return (
    <Fragment>
      <S.Footer>
        <Container style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <FlexContainer>
            <FlexFloatContainer>
              <FlexFloat>
                <Logo />
                {/* <S.Language>1Delta DAO</S.Language> */}
                <S.Para>
                  ® 2023 1Delta DAO
                  <br />
                  All Rights Reserved
                </S.Para>
              </FlexFloat>
            </FlexFloatContainer>
            <Col lg={8} md={8} sm={12} xs={24} style={{ marginTop: isMobile && '20px' }}>
              <FooterSocial />
            </Col>
          </FlexContainer>
        </Container>
      </S.Footer>
    </Fragment>
  );
};

export default Footer;
