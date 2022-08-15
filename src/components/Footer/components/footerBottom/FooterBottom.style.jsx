import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledFooterBottomWrapper = styled.div`
  background-color: #1e1b1b;
`;

export const StyledFooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;

  p {
    color: #939191;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    justify-content: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
    height: 160px;
    margin-bottom: 0px;

    p {
      margin-bottom: 0px;
    }
  }
`;

export const StyledFooterBottomLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 18%;
  margin-top: 2em;

  img {
    width: 121px;
    height: 27px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 30%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    justify-content: flex-start;
    width: 18%;
    margin-top: 0;
  }
`;

export const StyledFooterNavigation = styled.div`
  margin-top: 30px;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin-bottom: 30px;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 35%;
    margin-top: 0;

    ul {
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 0px;
    }
  }
`;
