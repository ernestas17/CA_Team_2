import React from 'react';
import { StyledValuesSectionWrapper } from './Values.style';
import Value from '../../../../components/atoms/Value';
import aboutUsValue1 from '../../../../assets/images/aboutUsValue1.png';
import aboutUsValue2 from '../../../../assets/images/aboutUsValue2.png';

const Values = () => {
  return (
    <StyledValuesSectionWrapper>
      <Value
        image={aboutUsValue1}
        heading="Serve our customers and always deliver the customer service"
        text="We provide a full range of front end mechanical repairs for all
        makes and models of cars, no matter the cause. This includes"
        bgColor="primary"
      />
      <Value
        heading="To be the world’s most eader in automotive business solutions"
        text="We provide a full range of front end mechanical repairs for all makes
      and models of cars, no matter the cause. This includes"
      />
      <Value
        image={aboutUsValue2}
        heading="We value the service we provide and our loyal returning"
        text="We provide a full range of front end mechanical repairs for all makes
       and models of cars, no matter the cause. This includes"
        bgColor="secondary"
      />
    </StyledValuesSectionWrapper>
  );
};

export default Values;
