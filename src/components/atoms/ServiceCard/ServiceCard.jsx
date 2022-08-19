import {
  StyledServiceCardWrapper,
  StyledCardTextWrapper,
  StyledServiceCardIconContainer,
} from './ServiceCard.style';

const ServiceCard = ({ icon, headline, text, iconContainerColor, bgColor }) => {
  return (
    <StyledServiceCardWrapper bgColor={bgColor}>
      <StyledServiceCardIconContainer iconContainerColor={iconContainerColor}>
        {icon}
      </StyledServiceCardIconContainer>
      <StyledCardTextWrapper>
        <h5>{headline}</h5>
        <p>{text}</p>
      </StyledCardTextWrapper>
    </StyledServiceCardWrapper>
  );
};

export default ServiceCard;
