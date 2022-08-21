import { StyledInputWrapper } from './FormInput.styled';

const FormInput = ({ type, placeholder }) => {
  return (
    <StyledInputWrapper>
      <input type={type} placeholder={placeholder} />
    </StyledInputWrapper>
  );
};

export default FormInput;
