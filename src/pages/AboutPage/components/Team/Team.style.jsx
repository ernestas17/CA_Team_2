import styled from 'styled-components';
import BREAKPOINTS from '../../../../shared/constant/breakpoints';

export const StyledTeamWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 1280px;
  margin: 0 auto;

  h2 {
    font-size: var(--heading1);
    margin: 60px 0px 66px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    h2 {
      margin-top: 128px 0px 66px;
    }
  }
`;

export const StyledTeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 80px;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    justify-content: flex-start;
    margin-bottom: 140px;
  }
`;
