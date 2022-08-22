import React from 'react';
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';
import CallToAction from '../../components/organisms/CallToAction/CallToAction';
import {
  StyledSingleServicePageContainer,
  StyledHeading,
} from './ServiceSinglePage.style';

const ServiceSinglePage = () => {
  return (
    <main>
      <StyledHeading>Auto Diagnostics</StyledHeading>
      <StyledSingleServicePageContainer>
        <LeftSection />
        <RightSection />
      </StyledSingleServicePageContainer>
      <CallToAction />
    </main>
  );
};

export default ServiceSinglePage;
