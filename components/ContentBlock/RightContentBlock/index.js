import { Row, Col } from 'antd';
import Slide from 'react-reveal/Slide';

import SvgIcon from '../../../common/SvgIcon';
import Button from '../../../common/Button';

import * as S from './styles';
import { useWindowSize } from '../../../utils/useWindowSize';

const RightBlock = ({ title, content, button, icon, t, id }) => {

  const windowSize = useWindowSize()

  const isMobile = windowSize.width < 450

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper style={{ padding: '50px', marginBottom: isMobile ? '-25px' : '0px' }}>
              <h6 style={{ fontWeight: 'bold', lineHeight:'40px' }}>{title}</h6>
              <S.Content>{content}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === 'object' &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width='true'
                        onClick={() => scrollTo('about')}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className='about-block-image'
              width='100%'
              height='100%'
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default RightBlock;
