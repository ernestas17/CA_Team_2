import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledValue = styled.div`
  width: 100%;
  position: relative;
  height: 400px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: calc(100% / 3);
    height: 500px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxxl}) {
    height: 630px;
  }
`;

export const StyledValueText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: var(
    --${(props) => (props.bgColor ? props.bgColor : 'black')}
  );
  opacity: 0.9;
  height: 400px;

  padding: 70px 70px;
  letter-spacing: -3%;
  text-align: center;

  h4 {
    font-size: var(--heading5);
    font-weight: 700;
    line-height: 45px;
    margin-bottom: 20px;
  }

  p {
    font-size: var(--paragraph1);
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 120px 100px;
    height: 400px;

    h4 {
      font-size: var(--heading4);
      line-height: 56px;
      margin-bottom: 32px;
    }

    p {
      font-size: var(--title2);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 500px;
    text-align: start;
    padding: 40px 40px;

    h4 {
      font-size: var(--heading5);
      line-height: 45px;
    }

    p {
      font-size: var(--paragraph1);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 40px 50px;
    text-align: start;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxxl}) {
    height: 630px;
    padding: 120px 100px;

    h4 {
      font-size: var(--heading4);
      line-height: 56px;
    }

    p {
      font-size: var(--title2);
    }
  }
`;
