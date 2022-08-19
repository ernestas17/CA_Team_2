import Steps from '../../../../components/molecules/Steps/Steps';
import {
  StyledStepsSectionWrapper,
  StyledStepsSectionImgContainer,
  StyledStepsSectionLeft,
  StyledStepsSectionsHeadline,
  StyledStepsSectionsText,
} from './StepsSection.style';

const StepsSection = () => {
  return (
    <StyledStepsSectionWrapper>
      <StyledStepsSectionLeft>
        <StyledStepsSectionsHeadline>
          We Provide Expert Service and aim to have a long term with you
        </StyledStepsSectionsHeadline>
        <StyledStepsSectionsText>
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter
        </StyledStepsSectionsText>
        <Steps />
      </StyledStepsSectionLeft>
      <StyledStepsSectionImgContainer></StyledStepsSectionImgContainer>
    </StyledStepsSectionWrapper>
  );
};

export default StepsSection;
