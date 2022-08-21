import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledBrandsSection = styled.section`
  width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  h3 {
    font-size: var(--heading3);
    text-align: center;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 120px 20px;
  }
`;

export const StyledBrandsSectionLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  svg {
    color: var(--dark);
    width: calc(100% / 2);
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    svg {
      width: calc(100% / 3);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    svg {
      width: calc(100% / 5);
    }
  }
`;
