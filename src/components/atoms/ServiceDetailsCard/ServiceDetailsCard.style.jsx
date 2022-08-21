import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledServiceDetailsCardWrapper = styled.div`
  max-width: 600px;
  padding: 50px 40px;
  background-color: var(--white);

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    max-width: 500px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    max-width: 624px;
    max-height: 760px;
    padding: 64px 48px;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: -3%;
  color: var(--dark);

  h3 {
    font-size: var(--heading4);
    margin: 32px 0 16px 0;
  }

  p {
    font-size: var(--paragraph1);
    font-size: var(--title2);
    margin-bottom: 32px;
    opacity: 0.6;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    h3 {
      font-size: var(--heading3);
    }

    p {
      font-size: var(--title2);
    }
  }
`;
