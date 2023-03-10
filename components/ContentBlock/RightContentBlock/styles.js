import styled from 'styled-components';

export const RightBlockContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
    overflow-y: hidden;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;
  flex: 0.7;
  padding: 50px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;
