import {
  DiagnosticsIcon,
  WheelRepairIcon,
  OilFilterIcon,
  BodyWorkIcon,
  BatteriesIcon,
  InsuranceClaimIcon,
  CustomServiceIcon,
  EngineRepairIcon,
} from '../../../../assets/icons/icons';
import Card from '../../../../components/atoms/Card';
import ArrowButton from '../../../../components/atoms/ArrowButton';
import {
  StyledOfferSection,
  StyledOfferSectionCards,
  StyledOfferSectionWrapper,
  StyledOfferSectionHeading,
  StyledOfferSectionButtonWrapper,
} from './OfferSection.styled';

const OfferSection = () => {
  return (
    <StyledOfferSection>
      <StyledOfferSectionWrapper>
        <StyledOfferSectionHeading>
          <p>What we offer</p>
          <h2>We offer full service auto repair & maintenance</h2>
        </StyledOfferSectionHeading>
        <StyledOfferSectionCards>
          <Card icon={<DiagnosticsIcon />} text="Diagnostics" />
          <Card icon={<EngineRepairIcon />} text="Engine Repair" />
          <Card icon={<WheelRepairIcon />} text="Wheel Repair" />
          <Card icon={<OilFilterIcon />} text="Oil Filter" />
          <Card icon={<BodyWorkIcon />} text="Body Work" />
          <Card icon={<BatteriesIcon />} text="Batteries" />
          <Card icon={<InsuranceClaimIcon />} text="Insurance Claim" />
          <Card icon={<CustomServiceIcon />} text="Custom Service" />
        </StyledOfferSectionCards>
        <StyledOfferSectionButtonWrapper>
          <ArrowButton
            text="Learn about services"
            path={'/services'}
            hoverColor="secondary"
          />
        </StyledOfferSectionButtonWrapper>
      </StyledOfferSectionWrapper>
    </StyledOfferSection>
  );
};

export default OfferSection;
