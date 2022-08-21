import ArrowButton from '../ArrowButton/ArrowButton';
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
      <ArrowButton
        text="See service details"
        path={'/service-single'}
        hoverColor="secondary"
      />
    </StyledServiceDetailsCardWrapper>
  );
};

export default ServiceDetailsCard;
