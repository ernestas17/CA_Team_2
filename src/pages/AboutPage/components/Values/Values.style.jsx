import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledValuesSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 1200px;
  color: var(--white);

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    height: 500px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxxl}) {
    height: 630px;
  }
`;
