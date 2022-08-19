import React from 'react';
import Hero from '../../components/organisms/Hero';
import StepsSection from './components/StepsSection/StepsSection';
import Values from './components/Values/Values';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import CallToAction from '../../components/organisms/CallToAction/CallToAction';
import aboutUsHero from '../../assets/images/aboutUsHero.png';

const AboutPage = () => {
  return (
    <main>
      <Hero
        heroImg={aboutUsHero}
        headline="About us"
        heroText="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw Through True Rich Attended does  "
      />
      <StepsSection />
      <Values />
      <Services />
      <Team />
      <CallToAction />
    </main>
  );
};

export default AboutPage;
