import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledExperienceWrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--lightergrey);

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 210px;
    padding: 0px 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0px;
  }
`;

export const StyledExperienciesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 auto;
  width: 768px;
  padding: 30px 20px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 48px 0;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    justify-content: space-between;
    width: 1280px;
    flex-wrap: nowrap;
  }
`;

export const StyledExperience = styled.div`
  width: 50%;
  text-align: center;
  margin-bottom: 50px;
  letter-spacing: -3%;

  h2 {
    font-size: var(--heading2);
    color: var(--secondary);
    margin-bottom: 2px;
  }

  p {
    font-size: var(--title2);
    color: var(--dark);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: auto;
    text-align: start;
    margin-bottom: 0;
  }
`;
