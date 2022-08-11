import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderNavigation,
  StyledHeaderMenuItem,
  StyledHeaderAssistance,
  StyledHeaderMenuWrapper,
} from './Header.styled';

import {
  AssistanceIcon,
  HamburgerMenuIcon,
  LogoIcon,
  XMarkIcon,
} from '../../assets/icons/icons';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <LogoIcon />

        <StyledHeaderMenuWrapper>
          <div>
            <StyledHeaderNavigation>
              <StyledHeaderMenuItem>
                <Link to={'/'}>Home</Link>
              </StyledHeaderMenuItem>
              <StyledHeaderMenuItem>
                <Link to={'/about'}>About us</Link>
              </StyledHeaderMenuItem>
              <StyledHeaderMenuItem>
                <Link to={'/services'}>Services</Link>
              </StyledHeaderMenuItem>
              <StyledHeaderMenuItem>
                <Link to={'/blog'}>Blog</Link>
              </StyledHeaderMenuItem>
              <StyledHeaderMenuItem>
                <Link to={'/contact'}>Contact</Link>
              </StyledHeaderMenuItem>
            </StyledHeaderNavigation>
          </div>
          <StyledHeaderAssistance>
            <div className="icon-container">
              <AssistanceIcon />
            </div>
            <div>
              <p className="grey-text">Road Assistance</p>
              <p>1800 265 24 52</p>
            </div>
          </StyledHeaderAssistance>
          <div className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <XMarkIcon /> : <HamburgerMenuIcon />}
          </div>
        </StyledHeaderMenuWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
