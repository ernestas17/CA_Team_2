import { useNavigate } from 'react-router-dom';
import Hero from '../../components/organisms/Hero/Hero';
import Card from '../../components/atoms/Card/Card';
import ServiceDetailsCard from '../../components/atoms/ServiceDetailsCard';
import CallToAction from '../../components/organisms/CallToAction/CallToAction';
import ServicesHero from '../../assets/images/ServicesHero.png';
import Car from '../../assets/images/Car.png';
import Car2 from '../../assets/images/Car2.png';
import Car3 from '../../assets/images/Car3.png';
import Car4 from '../../assets/images/Car4.png';
import Wheel from '../../assets/images/Wheel.png';
import {
  DiagnosticsIcon,
  EngineRepairIcon,
  CheckIcon,
  CarIcon,
  BatteryIcon,
} from '../../assets/icons/icons';
import {
  StyledCardContainer,
  StyledServiceContainer,
  StyledServiceWrapper,
  StyledHowSectionWrapper,
  StyledHowWrapper,
  StyledFirstHowTextContainer,
  StyledCircle,
  StyledFirstHowText,
  StyledHowImageContainer,
  StyledSecondHowTextContainer,
} from './ServicesPage.style';

import Button from '../../components/atoms/Button/Button';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Hero
        headline="Our services"
        heroText="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  "
        heroImg={ServicesHero}
      />
      <StyledServiceWrapper>
        <StyledServiceContainer>
          <ServiceDetailsCard
            heading="Auto Diagnostics"
            cardText="Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic. Through True Rich Attended does no end it his mother. "
            image={Car}
            text="See service details"
          />
          <StyledCardContainer>
            <Card icon={<DiagnosticsIcon />} text="Auto Dignostics" />
            <Card icon={<EngineRepairIcon />} text="Engin Repair" />
            <Card icon={<CarIcon />} text="Body Work" />
            <Card icon={<BatteryIcon />} text="Batteries" />
            <Card icon={<DiagnosticsIcon />} text="Car wash" />
            <Card icon={<EngineRepairIcon />} text="AC Repair" />
          </StyledCardContainer>
        </StyledServiceContainer>
      </StyledServiceWrapper>
      <StyledHowSectionWrapper>
        <StyledHowWrapper>
          <StyledFirstHowTextContainer>
            <h3>How we work and the process we follow</h3>
            <StyledFirstHowText>
              <StyledCircle>
                <CheckIcon />
              </StyledCircle>
              <p>Through True Rich Attended does no end it his mother since</p>
            </StyledFirstHowText>
            <StyledFirstHowText>
              <StyledCircle>
                <CheckIcon />
              </StyledCircle>
              <p>
                Attended does no end it his mother since real had half every
              </p>
            </StyledFirstHowText>
            <StyledFirstHowText>
              <StyledCircle>
                <CheckIcon />
              </StyledCircle>
              <p>
                Since real had half every him case in packages enquire we up
                ecstatic
              </p>
            </StyledFirstHowText>
          </StyledFirstHowTextContainer>
          <StyledHowImageContainer>
            <img src={Car2} alt="car" />
            <img src={Car3} alt="car" />
          </StyledHowImageContainer>
        </StyledHowWrapper>
        <StyledHowWrapper>
          <StyledHowImageContainer>
            <img src={Wheel} alt="Wheel" />
            <img src={Car4} alt="Car" />
          </StyledHowImageContainer>
          <StyledSecondHowTextContainer>
            <h3>Diagnose Car Problems If You Don’t Know Much About Cars</h3>
            <p>
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes
              everything from struts, shocks, and tie rod ends to ball joints,
              springs everything from struts, shocks, and tie rod ends to ball
              joints, springs
            </p>
            <Button
              text="Book a service"
              bgColor="primary"
              action={() => navigate('/service-single')}
            />
          </StyledSecondHowTextContainer>
        </StyledHowWrapper>
      </StyledHowSectionWrapper>
      <CallToAction />
    </main>
  );
};

export default ServicesPage;
