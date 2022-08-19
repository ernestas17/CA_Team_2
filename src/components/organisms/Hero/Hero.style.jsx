import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledHeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    height: 550px;
    margin-top: 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-top: 60px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    width: 1280px;
    margin: 0 auto;
    margin-top: 80px;
  }
`;

export const StyledHeroImgContainer = styled.div`
  background-image: ${(props) =>
    props.heroImg ? `url(${props.heroImg})` : ''};
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

  width: 550px;
`;

export const StyledHeroRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: var(--dark);
  color: var(--lightgrey);
  padding: 98px 96px;
  width: 730px;

  h1 {
    font-size: var(--heading1);
    margin-bottom: 16px;
  }

  p {
    font-size: var(--paragraph1);
    line-height: 31.5px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 80px 60px;

    h1 {
      font-size: var(--heading1);
      margin-bottom: 16px;
    }

    p {
      font-size: var(--paragraph1);
      margin-bottom: 48px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 98px 96px;
  }
`;
