import React from 'react';

import FooterBottom from './components/footerBottom/FooterBottom';
import FooterTop from './components/footerTop';

import { StyledFooterWrapper } from './Footer.style';

const Footer = ({ display }) => {
  return (
    <StyledFooterWrapper>
      <FooterTop display={display} />
      <FooterBottom />
    </StyledFooterWrapper>
  );
};

export default Footer;
