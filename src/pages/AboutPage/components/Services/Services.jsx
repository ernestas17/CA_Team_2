import React from 'react';
import ServiceCard from '../../../../components/atoms/ServiceCard';
import {
  ServiceIcon,
  MechanicIcon,
  DollarIcon,
} from '../../../../assets/icons/icons';
import {
  StyledServicesWrapper,
  StyledServicesCardsWrapper,
  StyledServicesHeading,
} from './Services.style';
import Experience from '../../../../components/atoms/Experience/Experience';

const Services = () => {
  return (
    <StyledServicesWrapper>
      <StyledServicesHeading>
        Services we provide to our valued customers
      </StyledServicesHeading>
      <StyledServicesCardsWrapper>
        <ServiceCard
          iconContainerColor="pink"
          bgColor="white"
          icon={<ServiceIcon />}
          headline="Convenient Service"
          text="Through True Rich Attended does no end it his mother since real had half every him end it his mother"
        />
        <ServiceCard
          iconContainerColor="pink"
          bgColor="white"
          icon={<MechanicIcon />}
          headline="Expert Mechanics"
          text="Through True Rich Attended does no end it his mother since real had half every him end it his mother"
        />
        <ServiceCard
          iconContainerColor="pink"
          bgColor="white"
          icon={<DollarIcon />}
          headline="Transparent Pricing"
          text="Through True Rich Attended does no end it his mother since real had half every him end it his mother"
        />
      </StyledServicesCardsWrapper>
      <Experience />
    </StyledServicesWrapper>
  );
};

export default Services;
