import React from 'react';
import {
  StyledExperienceWrapper,
  StyledExperience,
  StyledExperienciesContainer,
} from './Experience.style';

const Experience = () => {
  return (
    <StyledExperienceWrapper>
      <StyledExperienciesContainer>
        <StyledExperience>
          <h2>20+</h2>
          <p>Proffesionals</p>
        </StyledExperience>
        <StyledExperience>
          <h2>10+</h2>
          <p>Years Eperience</p>
        </StyledExperience>
        <StyledExperience>
          <h2>12K+</h2>
          <p>Services Closed</p>
        </StyledExperience>
        <StyledExperience>
          <h2>100%</h2>
          <p>Customer Satisfaction</p>
        </StyledExperience>
      </StyledExperienciesContainer>
    </StyledExperienceWrapper>
  );
};

export default Experience;
