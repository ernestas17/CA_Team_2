import Button from '../Button/Button';
import {
  StyledServiceDetailsCardWrapper,
  StyledTextContainer,
} from './ServiceDetailsCard.style';

const ServiceDetailsCard = ({ image, heading, cardText, text }) => {
  return (
    <StyledServiceDetailsCardWrapper>
      <img src={image} alt={image} />
      <StyledTextContainer>
        <h3>{heading}</h3>
        <p>{cardText}</p>
      </StyledTextContainer>
      <Button text={text} />
    </StyledServiceDetailsCardWrapper>
  );
};

export default ServiceDetailsCard;
