import styled from 'styled-components';
import BREAKPOINTS from '../../shared/constant/breakpoints';

export const StyledContactWrapper = styled.main`
  width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    gap: 50px;
    padding: 60px 20px 60px 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    gap: 100px;
  }
`;

export const StyledContactLeft = styled.div`
  display: flex;
  align-self: center;
  width: 80%;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    text-align: left;
  }
`;

export const StyledContactRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-self: center;
  width: 80%;
  text-align: center;

  p {
    font-size: var(--title2);
  }

  span {
    font-size: var(--paragraph2);
    color: var(--darkgrey);
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding-top: 70px;
    align-self: center;
    text-align: left;
    width: 50%;
  }
`;

export const StyledContactPageImage = styled.img`
  margin-bottom: -6px;
  width: 100%;
  height: auto;
`;
