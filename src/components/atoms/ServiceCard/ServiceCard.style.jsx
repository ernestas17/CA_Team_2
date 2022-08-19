import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(
    --${(props) => (props.bgColor ? props.bgColor : 'transparent')}
  );
  width: 430px;
  height: 430px;
  border: 1px solid var(--grey);
  padding: 88px 60px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: calc(100% / 3);
    height: 350px;
    padding: 40px 30px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    width: 430px;
    height: 430px;
    padding: 70px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 88px 60px;
  }
`;

export const StyledServiceCardIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(
    --${(props) => (props.iconContainerColor ? props.iconContainerColor : 'transparent')}
  );
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 24px;
`;

export const StyledCardTextWrapper = styled.div`
  h5 {
    font-size: var(--title1);
    margin-bottom: 16px;
  }

  p {
    font-size: var(--paragraph1);
    line-height: 175%;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    h5 {
      font-size: var(--title2);
    }

    p {
      font-size: var(--paragraph2);
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    h5 {
      font-size: var(--title1);
    }

    p {
      font-size: var(--paragraph1);
    }
  }
`;
