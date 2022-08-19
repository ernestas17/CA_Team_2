import { StyledCardWrapper, StyledCardTextWrapper } from './Card.styled';

const Card = ({ icon, text }) => {
  return (
    <StyledCardWrapper>
      {icon}
      <StyledCardTextWrapper>{text}</StyledCardTextWrapper>
    </StyledCardWrapper>
  );
};

export default Card;
