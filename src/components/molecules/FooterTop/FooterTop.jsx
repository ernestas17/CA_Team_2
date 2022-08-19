import React from 'react';

import {
  StyledFooterTop,
  StyledFooterTopLeft,
  StyledFooterLeftSocialIcons,
  StyledFooterTopRight,
  StyledFooterTopRightList,
  StyledFooterTopWrapper,
} from './FooterTop.style';

import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
} from '../../../assets/icons/icons';

const FooterTop = ({ display }) => {
  return (
    <StyledFooterTopWrapper>
      <StyledFooterTop>
        <StyledFooterTopLeft>
          <h3>Get in touch with us for your service</h3>
          <StyledFooterLeftSocialIcons>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </StyledFooterLeftSocialIcons>
        </StyledFooterTopLeft>
        <StyledFooterTopRight>
          <StyledFooterTopRightList>
            <li>Help line Number</li>
            <p>1800 265 24 52</p>
          </StyledFooterTopRightList>
          <StyledFooterTopRightList>
            <li>Address</li>
            <p>NH 234 Public Square San Francisco 65368</p>
          </StyledFooterTopRightList>
          <StyledFooterTopRightList>
            <li>We are open</li>
            <p>Monday to Friday 9:00 AM to 10:00 AM</p>
          </StyledFooterTopRightList>
        </StyledFooterTopRight>
      </StyledFooterTop>
    </StyledFooterTopWrapper>
  );
};

export default FooterTop;
