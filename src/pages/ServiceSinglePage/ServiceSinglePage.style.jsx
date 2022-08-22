import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constant/breakpoints';

export const StyledHeading = styled.h1`
  width: 1280px;
  margin: 50px auto;
  font-size: var(--heading1);
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    text-align: start;
    padding-left: 20px;
    margin: 80px auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding-left: 0;
  }
`;

export const StyledSingleServicePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 1280px;
  margin: 0 auto 50px auto;
  padding: 0 20px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    gap: 50px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    gap: 96px;
    margin: 0 auto 128px auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0;
  }
`;
