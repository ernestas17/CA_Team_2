import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledProcessSection = styled.section`
  width: 1320px;
  margin: 0 auto;
  padding: 60px 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    padding: 120px 20px;
  }
`;

export const StyledProcessSectionLeft = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 30px;

  h2 {
    font-size: var(--heading3);
  }

  p {
    width: 70%;
    align-self: center;
    font-size: var(--paragraph2);
    opacity: 0.6;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    text-align: left;

    h2 {
      font-size: var(--heading2);
    }

    p {
      align-self: flex-start;
    }
  }
`;

export const StyledProcessSectionRight = styled.section`
  align-self: center;
`;
