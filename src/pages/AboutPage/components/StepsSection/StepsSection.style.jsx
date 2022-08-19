import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';
import aboutUsSteps from '../../../../assets/images/aboutUsSteps.png';

export const StyledStepsSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    height: 770px;
    margin: 80px auto;
    width: 1280px;
    padding: 0px 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0px;
    margin: 128px auto;
  }
`;

export const StyledStepsSectionImgContainer = styled.div`
  display: none;
  background-image: url(${aboutUsSteps});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    display: block;
    height: auto;
    width: 574px;
  }
`;

export const StyledStepsSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  letter-spacing: -3%;
  color: var(--dark);

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    align-items: flex-start;
    width: 50%;
    padding: 0;
    margin-right: 30px;
  }
`;

export const StyledStepsSectionsHeadline = styled.h3`
  font-size: var(--heading4);
  line-height: 140%;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    text-align: start;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    font-size: var(--heading3);
  }
`;

export const StyledStepsSectionsText = styled.p`
  font-size: var(--title2);
  margin-bottom: 48px;
  opacity: 0.6;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 90%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    text-align: start;
    width: auto;
  }
`;
