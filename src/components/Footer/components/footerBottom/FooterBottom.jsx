import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../../../assets/logoWhite.svg';

import {
  StyledFooterBottom,
  StyledFooterNavigation,
  StyledFooterBottomLogoContainer,
  StyledFooterBottomWrapper,
} from './FooterBottom.style';

const FooterBottom = () => {
  return (
    <StyledFooterBottomWrapper>
      <StyledFooterBottom>
        <StyledFooterBottomLogoContainer>
          <img src={logoWhite} alt="logo" />
        </StyledFooterBottomLogoContainer>
        <StyledFooterNavigation>
          <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About us</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/contact'}>Contact</Link>
          </ul>
        </StyledFooterNavigation>
        <p>@ Copyright Finsweet 2021</p>
      </StyledFooterBottom>
    </StyledFooterBottomWrapper>
  );
};

export default FooterBottom;
