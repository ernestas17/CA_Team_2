import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledServicesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightergrey);

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 30px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding-bottom: 80px;
  }
`;

export const StyledServicesHeading = styled.h2`
  font-size: var(--heading3);
  width: 860px;
  text-align: center;
  margin: 60px 0 64px 0;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: var(--heading2);
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    margin: 128px 0 64px 0;
  }
`;

export const StyledServicesCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
  }
`;
