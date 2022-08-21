import React from 'react';
import {
  BatteriesIcon,
  EngineRepairIcon,
  DiagnosticsIcon,
} from '../../../../assets/icons/icons';
import Card from '../../../../components/atoms/Card/Card';
import Features from '../../../../components/molecules/Features/Features';
import {
  StyledLeftSectionWrapper,
  StyledLeftSectionContainer,
  StyledFeatureContainer,
} from './LeftSection.style';

const LeftSection = () => {
  return (
    <StyledLeftSectionWrapper>
      <StyledLeftSectionContainer>
        <h5>Other services</h5>
        <Card text="Engine Repair" icon={<EngineRepairIcon />} />
        <Card text="Car wash" icon={<DiagnosticsIcon />} />
        <Card text="Batteries" icon={<BatteriesIcon />} />
      </StyledLeftSectionContainer>
      <StyledFeatureContainer>
        <Features bgColor="grey" />
      </StyledFeatureContainer>
    </StyledLeftSectionWrapper>
  );
};

export default LeftSection;
