import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledRightSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 56px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    width: 854px;
  }
`;

export const StyledRightFirstContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-size: var(--heading4);
    margin-bottom: 24px;
  }

  p {
    font-size: var(--paragraph2);
    line-height: 25px;
    opacity: 0.6;
    margin-bottom: 40px;
  }
`;

export const StyledRightSecondContainer = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: var(--heading5);
    margin: 20px 0 24px 0;
  }

  p {
    font-size: var(--paragraph2);
    line-height: 25px;
    opacity: 0.6;
    margin-bottom: 30px;
  }

  p:nth-child(3) {
    border-left: 3px solid var(--dark);
    padding: 7px 0 0 32px;
    height: 112px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    h5 {
      margin: 40px 0 24px 0;
    }

    p:nth-child(3) {
      padding: 20px 0 0 32px;
    }
  }
`;
