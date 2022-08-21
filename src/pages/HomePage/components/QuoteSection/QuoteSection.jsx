import ArrowButton from '../../../../components/atoms/ArrowButton';
import Form from '../../../../components/molecules/Form';
import Features from '../../../../components/molecules/Features';
import {
  StyledQuoteSection,
  StyledQuoteSectionWrapper,
  StyledQuoteSectionLeft,
  StyledQuoteSectionRight,
  StyledFeaturesContainer,
} from './QuoteSection.styled';

const QuoteSection = () => {
  return (
    <StyledQuoteSection>
      <StyledQuoteSectionWrapper>
        <StyledQuoteSectionLeft>
          <h2>We are taking car servicing seriously</h2>
          <StyledFeaturesContainer>
            <Features bgColor="white" />
          </StyledFeaturesContainer>
          <ArrowButton
            text="Know more about us"
            path={'/about'}
            hoverColor="secondary"
          />
        </StyledQuoteSectionLeft>
        <StyledQuoteSectionRight>
          <Form
            heading="Get a quote for the car service"
            bgColor="primary"
            text="Get your quote"
            inputs={[
              { id: 1, type: 'text', placeholder: 'Enter your location' },
              { id: 2, type: 'text', placeholder: 'Enter your location' },
              { id: 3, type: 'text', placeholder: 'Enter your location' },
              { id: 4, type: 'text', placeholder: 'Enter your phone number' },
            ]}
          />
        </StyledQuoteSectionRight>
      </StyledQuoteSectionWrapper>
    </StyledQuoteSection>
  );
};

export default QuoteSection;
