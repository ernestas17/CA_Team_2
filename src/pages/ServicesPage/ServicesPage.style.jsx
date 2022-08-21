import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constant/breakpoints';

export const StyledServiceWrapper = styled.section`
  margin-top: 70px;
  padding: 70px 0;
  background-color: var(--lightgrey);

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 0;
    margin-top: 100px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    margin-top: 128px;
  }
`;

export const StyledServiceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    align-items: flex-start;
    width: 1280px;
    margin: 0 auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    gap: 32px;
  }
`;

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  & div {
    width: 230px;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    & div {
      width: 270px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    & div {
      width: 296px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 15px;
    margin-top: 0px;
    & div {
      width: 230px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    width: 50%;
    gap: 32px;
    & div {
      width: 250px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    justify-content: flex-start;
    & div {
      width: 296px;
    }
  }
`;

export const StyledHowSectionWrapper = styled.section`
  margin: 70px auto;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 1100px;
    margin: 128px auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    width: 1280px;
  }
`;

export const StyledHowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 70px;
    padding: 0 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    margin-bottom: 128px;
    padding: 0;
  }
`;

export const StyledFirstHowTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -3%;
  width: 90%;
  padding: 0 20px;

  h3 {
    text-align: center;
    font-size: var(--heading3);
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    align-items: flex-start;
    width: 50%;
    padding: 0 40px;
    h3 {
      text-align: start;
      font-size: var(--heading4);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0;
    h3 {
      font-size: var(--heading3);
    }
  }
`;

export const StyledCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--mint);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFirstHowText = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;

  p {
    margin-top: 5px;
    font-size: var(--title2);
    width: 350px;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    p {
      width: 450px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    p {
      font-size: var(--paragraph1);
      width: 350px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    p {
      font-size: var(--title2);
      width: 450px;
    }
  }
`;

export const StyledHowImageContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 477px;

  img {
    width: 230px;
    height: auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    img {
      width: 270px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    img {
      width: 300px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    img {
      width: 230px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    flex-direction: row;
    img {
      width: 250px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    width: 50%;
    img {
      width: 304px;
    }
  }
`;

export const StyledSecondHowTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -3%;
  padding: 0 20px;
  text-align: center;
  width: 90%;

  h3 {
    font-size: var(--heading3);
    margin: 32px 0px;
  }

  p {
    font-size: var(--paragraph1);
    opacity: 0.6;
    line-height: 175%;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    align-items: flex-start;
    width: 50%;
    padding: 0 0 0 70px;
    text-align: start;

    h3 {
      font-size: var(--heading4);
      margin: 0 0 32px 0;
    }

    p {
      font-size: var(--paragraph2);
      opacity: 0.6;
      line-height: 175%;
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    p {
      font-size: var(--paragraph1);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0px 10px 0px 80px;
    h3 {
      font-size: var(--heading3);
    }
  }
`;
