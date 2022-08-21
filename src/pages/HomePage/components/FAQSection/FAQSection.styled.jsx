import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledFAQSection = styled.section`
  background-color: var(--steelgrey);
`;

export const StyledFAQSectionWrapper = styled.div`
  width: 1320px;
  margin: 0 auto;
  padding: 60px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h3 {
    font-size: var(--heading3);
    text-align: center;
    padding-bottom: 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 120px 20px;
  }
`;
