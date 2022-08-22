import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledLeftSectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    justify-content: flex-start;
    width: 330px;
    height: 670px;
    flex-direction: column;
    gap: 48px;
  }
`;

export const StyledLeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding: 32px;
  background-color: var(--lightgrey);

  & div {
    height: 130px;
    width: 200px;
  }

  h5 {
    font-size: var(--heading5);
    margin-bottom: 6px;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    & div {
      width: 220px;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    & div {
      height: 158px;
      width: 264px;
    }
  }
`;

export const StyledFeatureContainer = styled.div`
  width: 300px;
`;
