import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledQuoteSection = styled.section`
  background-color: var(--steelgrey);
`;

export const StyledQuoteSectionWrapper = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 80px 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    padding: 120px 20px;
  }
`;

export const StyledQuoteSectionLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;

  h2 {
    font-size: var(--heading3);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    align-items: flex-start;

    h2 {
      font-size: var(--heading2);
      text-align: left;
    }

    button {
      padding-left: 68px;
    }
  }
`;

export const StyledFeaturesContainer = styled.div`
  width: 70%;

  p {
    width: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    p {
      width: 90%;
    }
  }
`;

export const StyledQuoteSectionRight = styled.div`
  display: flex;
  align-self: center;
  width: 80%;
  text-align: center;

  h3 {
    font-size: var(--heading3);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    align-self: flex-start;
    width: 50%;
    text-align: left;
  }
`;
