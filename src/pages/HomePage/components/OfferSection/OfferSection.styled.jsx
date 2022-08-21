import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledOfferSection = styled.section`
  background-color: var(--lightgrey);
`;

export const StyledOfferSectionWrapper = styled.section`
  width: 1320px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 120px 20px;
  }
`;

export const StyledOfferSectionCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  div {
    width: 100%;
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    div {
      width: calc((100% - 5px) / 2);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    div {
      width: calc((100% - 15px) / 4);
    }
  }
`;

export const StyledOfferSectionHeading = styled.div`
  text-align: center;
  padding-bottom: 40px;

  h2 {
    font-size: var(--heading4);
  }

  p {
    font-size: var(--title2);
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    h2 {
      font-size: var(--heading3);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    h2 {
      font-size: var(--heading2);
    }
  }
`;

export const StyledOfferSectionButtonWrapper = styled.div`
  padding-top: 20px;
  align-self: flex-end;
`;
