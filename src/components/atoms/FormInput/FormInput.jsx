import { StyledInputWrapper } from './FormInput.styled';

const FormInput = ({ type, placeholder, color }) => {
  return (
    <StyledInputWrapper color={color}>
      <input type={type} placeholder={placeholder} />
    </StyledInputWrapper>
  );
};

export default FormInput;
