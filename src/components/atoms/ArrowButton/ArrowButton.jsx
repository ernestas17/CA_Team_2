import { ArrowIcon } from '../../../assets/icons/icons';
import { Link } from 'react-router-dom';
import { StyledArrowButton } from './ArrowButton.styled';

const ArrowButton = ({ text, path, hoverColor }) => {
  return (
    <StyledArrowButton hoverColor={hoverColor}>
      <Link to={path}>
        <p>{text}</p>
        <ArrowIcon />
      </Link>
    </StyledArrowButton>
  );
};

export default ArrowButton;
