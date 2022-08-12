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
import logo from '../../assets/logo.svg';
import assistanceIcon from '../../assets/icons/assistanceIcon.svg';
import hamburgericon from '../../assets/icons/hamburgericon.svg';
import xmarkIcon from '../../assets/icons/xmarkIcon.svg';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>

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
              <img src={assistanceIcon} alt="assistance-icon" />
            </div>
            <div>
              <p className="grey-text">Road Assistance</p>
              <p>1800 265 24 52</p>
            </div>
          </StyledHeaderAssistance>
          <div className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <img src={xmarkIcon} alt="x-mark-icon" />
            ) : (
              <img src={hamburgericon} alt="hamburger-icon" />
            )}
          </div>
        </StyledHeaderMenuWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
