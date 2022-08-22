import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderAssistance,
  StyledHeaderMenuWrapper,
} from './Header.styled';

import {
  AssistanceIcon,
  HamburgerMenuIcon,
  LogoIcon,
  XMarkIcon,
} from '../../../assets/icons/icons';
import Navigation from '../../atoms/Navigation/Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Link to={'/'}>
          <LogoIcon />
        </Link>
        <StyledHeaderMenuWrapper>
          <div>
            <Navigation />
          </div>
          <StyledHeaderAssistance>
            <div className="icon-container">
              <AssistanceIcon />
            </div>
            <div>
              <span>Road Assistance</span>
              <p>1800 265 24 52</p>
            </div>
          </StyledHeaderAssistance>
          <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon /> : <HamburgerMenuIcon />}
          </div>
        </StyledHeaderMenuWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
