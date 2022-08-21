import {
  StyledTestimonialsCardWrapper,
  StyledImageContainer,
  StyledPersonInfoContainer,
} from './TestimonialsCard.styled';

const TestimonialsCard = ({ name, city, image, review }) => {
  return (
    <StyledTestimonialsCardWrapper>
      <StyledPersonInfoContainer>
        <StyledImageContainer image={image}></StyledImageContainer>
        <div>
          <h5>{name}</h5>
          <span>{city}</span>
        </div>
      </StyledPersonInfoContainer>
      <div>
        <p>{review}</p>
      </div>
    </StyledTestimonialsCardWrapper>
  );
};

export default TestimonialsCard;
