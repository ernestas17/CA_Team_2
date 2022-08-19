import styled from 'styled-components';
import BREAKPOINTS from '../../../shared/constant/breakpoints';

export const StyledStepCard = styled.div`
  display: flex;
  gap: 24px;
`;

export const StyledStepCardCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
  border-radius: 50%;

  width: 72px;
  height: 72px;
  position: relative;

  span {
    font-size: var(--title1);
    font-weight: 700;
    color: var(--white);
  }
`;

export const StyledStepCardBottomCircle = styled.div`
  background-color: rgba(255, 255, 255, 0.24);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: -30%;
`;

export const StyledStepCardLine = styled.span`
  border-left: 2px dashed var(--primary);
  height: 51px;
  position: absolute;
  bottom: -90%;
`;

export const StepCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  color: var(--dark);

  h5 {
    font-size: var(--title2);
    margin-bottom: 8px;
    margin-top: 16px;
  }

  p {
    font-size: var(--paragraph2);
    line-height: 175%;
    opacity: 0.9;
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
