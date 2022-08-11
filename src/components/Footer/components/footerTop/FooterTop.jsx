import React from 'react';

import fb from '../../../../assets/icons/fb.svg';
import twitter from '../../../../assets/icons/twitter.svg';
import ig from '../../../../assets/icons/ig.svg';
import lin from '../../../../assets/icons/lin.svg';

import {
  StyledFooterTop,
  StyledFooterTopLeft,
  StyledFooterLeftSocialIcons,
  StyledFooterTopRight,
  StyledFooterTopRightList,
  StyledFooterTopWrapper,
} from './FooterTop.style';

const FooterTop = ({ display }) => {
  return (
    <StyledFooterTopWrapper>
      <StyledFooterTop display={display}>
        <StyledFooterTopLeft>
          <h3>Get in touch with us for your service</h3>
          <StyledFooterLeftSocialIcons>
            <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={ig} alt="instagram" />
            <img src={lin} alt="linkedIn" />
          </StyledFooterLeftSocialIcons>
        </StyledFooterTopLeft>
        <StyledFooterTopRight>
          <StyledFooterTopRightList>
            <li>Help line Noumber</li>
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
