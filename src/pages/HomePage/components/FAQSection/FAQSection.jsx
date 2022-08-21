import FAQCard from '../../../../components/atoms/FAQCard/FAQCard';
import { StyledFAQSection, StyledFAQSectionWrapper } from './FAQSection.styled';

const FAQSection = () => {
  return (
    <StyledFAQSection>
      <StyledFAQSectionWrapper>
        <h3>Frequently Asked Questions</h3>
        <FAQCard
          title="How long should a car repair take?"
          text=" I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet"
        />
        <FAQCard
          title="How do I schedule my car's appointment?"
          text=" I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet"
        />
        <FAQCard
          title="What are the repair services provided?"
          text=" I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet"
        />
        <FAQCard
          title="How do I find auto body shops near me?"
          text=" I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet"
        />
        <FAQCard
          title="Genuine spare parts during car repair?"
          text=" I have got my car repaired at Finsweet many times before, they are
              good at what they do. Not only did they repair my car I have got
              my car repaired at Finsweet I have got my car repaired at Finsweet"
        />
      </StyledFAQSectionWrapper>
    </StyledFAQSection>
  );
};

export default FAQSection;
