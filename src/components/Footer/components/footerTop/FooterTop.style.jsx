import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledFooterTopWrapper = styled.div`
  background-color: var(--dark);
  opacity: 0.98;
  padding-bottom: 50px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-bottom: 0;
  }
`;

export const StyledFooterTop = styled.div`
  display: ${(props) => (props.display === 'none' ? props.display : 'flex')};
  flex-direction: column;
  align-items: center;

  width: 90%;
  margin: 0 auto;
  padding-top: 50px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: start;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    max-width: 1280px;
    height: 550px;
    padding-top: 130px;
  }
`;

export const StyledFooterTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  text-align: center;

  h3 {
    font-size: var(--heading3);
    margin-top: 0;
    margin-bottom: 30px;
    width: 70%;
    align-self: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
    margin-bottom: 0px;
    text-align: start;

    h3 {
      width: 80%;
      align-self: start;
      margin-bottom: 65px;
      font-size: var(--heading4);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    h3 {
      font-size: var(--heading3);
    }
  }
`;

export const StyledFooterLeftSocialIcons = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;

  img {
    width: 24px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    justify-content: start;
    gap: 10%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 4%;
  }
`;

export const StyledFooterTopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
  }
`;

export const StyledFooterTopRightList = styled.div`
  li {
    list-style: none;
    color: var(--darkgrey);
    font-size: var(--paragraph1);
  }

  p {
    font-size: var(--title2);
    margin-top: 0.5em;
  }
`;
