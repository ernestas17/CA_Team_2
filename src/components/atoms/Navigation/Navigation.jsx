import { StyledHeaderNavigation } from '../Navigation/Navigation.styled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <StyledHeaderNavigation>
      <NavLink to={'/'} activeclassname="active">
        Home
      </NavLink>
      <NavLink to={'/about'}>About us</NavLink>
      <NavLink to={'/services'}>Services</NavLink>
      <NavLink to={'/blog'}>Blog</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
    </StyledHeaderNavigation>
  );
};

export default Navigation;
