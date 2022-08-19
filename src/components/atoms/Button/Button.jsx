import { StyledButton } from './Button.style';

const Button = ({ text, action, bgColor }) => {
  return (
    <StyledButton onClick={action} bgColor={bgColor}>
      {text}
    </StyledButton>
  );
};

export default Button;
