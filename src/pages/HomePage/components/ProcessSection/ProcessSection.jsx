import Button from '../../../../components/atoms/Button';
import Steps from '../../../../components/molecules/Steps';
import {
  StyledProcessSection,
  StyledProcessSectionLeft,
  StyledProcessSectionRight,
} from './ProcessSection.styled';

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledProcessSectionLeft>
        <h2>We follow a clear process to help you out.</h2>
        <p>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire
        </p>
        <div>
          <Button bgColor="primary" text="Learn more" />
        </div>
      </StyledProcessSectionLeft>
      <StyledProcessSectionRight>
        <Steps />
      </StyledProcessSectionRight>
    </StyledProcessSection>
  );
};

export default ProcessSection;
