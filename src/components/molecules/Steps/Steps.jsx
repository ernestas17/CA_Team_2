import React from 'react';
import StepCard from '../../atoms/StepCard/StepCard';
import { StyledSteps } from './Steps.style';

const Steps = () => {
  return (
    <StyledSteps>
      <StepCard
        number="1"
        headline="Get a Quote"
        text="Through True Rich Attended does no end it his mother since real had half every "
        line="true"
      />
      <StepCard
        number="2"
        headline="Book an Appointment"
        text="Through True Rich Attended does no end it his mother since real"
        line="true"
      />
      <StepCard
        number="3"
        headline="Get your Service Done"
        text="Ecstatic unsatiable saw his giving Remain expense you position concluded."
      />
    </StyledSteps>
  );
};

export default Steps;
