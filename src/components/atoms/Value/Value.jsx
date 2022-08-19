import React from 'react';
import { StyledValue, StyledValueText } from './Value.style';

const Value = ({ image, heading, text, bgColor }) => {
  return (
    <StyledValue>
      <img src={image} alt={image} />
      <StyledValueText bgColor={bgColor}>
        <h4>{heading}</h4>
        <p>{text}</p>
      </StyledValueText>
    </StyledValue>
  );
};

export default Value;
