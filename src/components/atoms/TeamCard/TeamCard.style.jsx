import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';
import NoUser from '../../../assets/images/NoUser.png';

export const StyledTeamCardWrapper = styled.div`
  position: relative;

  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage})` : `url(${NoUser})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 405px;
  height: 430px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    width: 350px;
    height: 380px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    width: 405px;
    height: 430px;
  }
`;

export const StyledTeamCardTextWrapper = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 116px;
  width: 100%;
  letter-spacing: -3%;

  background-color: var(--dark);
  color: var(--white);
`;

export const StyledTeamCardName = styled.p`
  font-size: var(--title2);
  margin-bottom: 4px;
`;

export const StyledTeamCardPosition = styled.p`
  font-size: var(--paragraph2);
  opacity: 0.7;
  line-height: 128%;
`;
