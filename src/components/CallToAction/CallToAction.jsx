import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import {
  StyledCTABgOne,
  StyledCTABgTwo,
  StyledCTAContainer,
  StyledCTAWrapper,
} from '../CallToAction/CallToAction.style';

const CallToAction = () => {
  const loadContactPage = useNavigate();

  return (
    <StyledCTAWrapper>
      <StyledCTABgOne></StyledCTABgOne>
      <StyledCTABgTwo></StyledCTABgTwo>
      <StyledCTAContainer>
        <h3>Get in touch with us for your service related query</h3>
        <Button text="Contact Us" action={() => loadContactPage('/contact')} />
      </StyledCTAContainer>
    </StyledCTAWrapper>
  );
};

export default CallToAction;
