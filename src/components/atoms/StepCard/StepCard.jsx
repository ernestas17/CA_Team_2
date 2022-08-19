import React from 'react';
import {
  StyledStepCard,
  StyledStepCardCircle,
  StyledStepCardBottomCircle,
  StyledStepCardLine,
  StepCardTextContainer,
} from './StepCard.style';

const StepCard = ({ headline, text, number, line }) => {
  return (
    <StyledStepCard>
      <StyledStepCardCircle>
        <StyledStepCardBottomCircle />
        <span>{'0' + number}</span>
        {line && <StyledStepCardLine></StyledStepCardLine>}
      </StyledStepCardCircle>
      <StepCardTextContainer>
        <h5>{headline}</h5>
        <p>{text}</p>
      </StepCardTextContainer>
    </StyledStepCard>
  );
};

export default StepCard;
