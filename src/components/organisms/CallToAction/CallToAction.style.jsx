import styled from 'styled-components';
import ctaBg1 from '../../../assets/images/ctaBg1.png';
import ctaBg2 from '../../../assets/images/ctaBg2.png';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledCTAWrapper = styled.div`
  display: flex;
  position: relative;
  height: 400px;

  @media (min-width: ${BREAKPOINTS.md}) {
    height: 500px;
  }
`;

export const StyledCTABgOne = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.md}) {
    display: inline-block;
    width: 50%;

    background-image: url(${ctaBg1});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
  }
`;

export const StyledCTABgTwo = styled.div`
  display: none;
  background-image: url(${ctaBg2});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  width: 50%;

  @media (min-width: ${BREAKPOINTS.md}) {
    display: inline-block;
  }
`;

export const StyledCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 60px;

  width: 100%;
  height: 400px;
  background-color: var(--primary);
  align-self: center;

  position: absolute;

  h3 {
    font-size: var(--heading4);
    letter-spacing: -0.03;
    color: var(--white);
    margin-bottom: 48px;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
    height: 500px;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    margin-left: 300px;
    width: 600px;
  }

  @media (min-width: ${BREAKPOINTS.xl}) {
    margin-left: 300px;
    width: 730px;
  }
`;
