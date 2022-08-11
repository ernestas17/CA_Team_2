import { StyledCardWrapper } from './Card.styled';

const Card = ({ icon, text }) => {
  return (
    <StyledCardWrapper>
      {icon}
      <div>{text}</div>
    </StyledCardWrapper>
  );
};

export default Card;
