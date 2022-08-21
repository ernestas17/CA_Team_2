import Button from '../../atoms/Button';
import FormInput from '../../atoms/FormInput';
import { StyledFormWrapper } from './Form.styled';

const Form = ({ heading, bgColor, text, inputs }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <StyledFormWrapper onClick={handleSubmit}>
      <h3>{heading}</h3>
      <div>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
      </div>
      <div>
        <Button bgColor={bgColor} text={text} />
      </div>
    </StyledFormWrapper>
  );
};

export default Form;
