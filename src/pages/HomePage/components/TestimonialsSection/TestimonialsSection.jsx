import {
  StyledTestimonialsSection,
  StyledTestimonialsSectionWrapper,
  StyledTestimonialsCardsContainer,
  StyledTestimonialsButton,
  StyledTestimonialsButtonsContainer,
  StyledTestimonialsLinesContainer,
} from './TestimonialsSection.styled';
import TestimonialsCard from '../../../../components/atoms/TestimonialsCard/TestimonialsCard';
import {
  LineIcon,
  SmallArrowRight,
  SmallArrowLeft,
} from '../../../../assets/icons/icons';
import testimonials1 from '../../../../assets/images/testimonials1.jpg';
import testimonials2 from '../../../../assets/images/testimonials2.jpg';

const TestimonialsSection = () => {
  return (
    <StyledTestimonialsSection>
      <StyledTestimonialsSectionWrapper>
        <h3>Our customers say the nicest things about our service</h3>
        <StyledTestimonialsCardsContainer>
          <TestimonialsCard
            image={testimonials1}
            name="Jonathan Vallem"
            city="New York"
            review="I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working"
          />
          <TestimonialsCard
            image={testimonials2}
            name="Smith Johnson"
            city="New York"
            review="I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working"
          />
        </StyledTestimonialsCardsContainer>
        <StyledTestimonialsLinesContainer>
          <LineIcon />
          <LineIcon />
          <LineIcon stroke="var(--primary)" />
          <LineIcon />
        </StyledTestimonialsLinesContainer>
        <StyledTestimonialsButtonsContainer>
          <StyledTestimonialsButton bgColor="white">
            <SmallArrowLeft />
          </StyledTestimonialsButton>
          <StyledTestimonialsButton>
            <SmallArrowRight fill="white" />
          </StyledTestimonialsButton>
        </StyledTestimonialsButtonsContainer>
      </StyledTestimonialsSectionWrapper>
    </StyledTestimonialsSection>
  );
};

export default TestimonialsSection;
