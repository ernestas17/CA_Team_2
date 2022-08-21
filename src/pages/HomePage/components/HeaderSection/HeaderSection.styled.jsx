import styled from 'styled-components';
import homePageImage from '../../../../assets/images/homePageImage.png';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledHeaderSection = styled.section`
  width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 60px 20px 120px 20px;
    flex-direction: row;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 40px;
  }
`;

export const StyledHeaderTextWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  h1 {
    font-size: var(--heading3);
    text-align: center;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 50%;
    align-items: flex-start;

    h1 {
      line-height: 65px;
      text-align: left;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    h1 {
      font-size: var(--heading1);
      line-height: 80px;
    }
  }
`;

export const StyledOpenWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: var(--paragraph2);

  .caption {
    color: var(--darkgrey);
  }
`;

export const StyledHeaderImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: auto;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    height: 450px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 600px;
  }
`;

export const StyledHeaderImage = styled.div`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    display: flex;
    position: absolute;

    width: 100%;
    height: 100%;

    background-image: url(${homePageImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const StyledQuickServiceContainer = styled.div`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 100px;
    position: absolute;
    left: -50px;
    top: 50px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    margin: 0 20px;

    background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
    outline: 12px solid rgba(225, 225, 225, 0.5);
    box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.5);
    border-radius: 59px;

    h6 {
      font-size: var(--title2);
      font-weight: 600;
    }
  }
`;

export const StyledRatingContainer = styled.div`
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 100px;
    position: absolute;
    right: -50px;
    bottom: 50px;
    left: initial;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    margin: 0 20px;

    background: linear-gradient(138.85deg, #ffffff -38.72%, #ffffff 153.95%);
    outline: 12px solid rgba(225, 225, 225, 0.5);
    box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.5);
    border-radius: 59px;

    h6 {
      font-size: var(--title2);
      font-weight: 600;
    }

    .caption {
      color: var(--darkgrey);
      font-size: var(--paragraph2);
    }
  }
`;
