import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button/Button';

import {
  StyledHeroWrapper,
  StyledHeroImgContainer,
  StyledHeroRight,
} from './Hero.style';

const Hero = ({ headline, heroText, heroImg }) => {
  const navigate = useNavigate();

  return (
    <StyledHeroWrapper>
      <StyledHeroImgContainer heroImg={heroImg}></StyledHeroImgContainer>
      <StyledHeroRight>
        <h1>{headline}</h1>
        <p>{heroText}</p>
        <Button
          text="Book a service"
          bgColor="primary"
          action={() => navigate('/services')}
        />
      </StyledHeroRight>
    </StyledHeroWrapper>
  );
};

export default Hero;
