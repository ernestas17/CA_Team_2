import HeaderSection from './components/HeaderSection';
import QuoteSection from './components/QuoteSection';
import ProcessSection from './components/ProcessSection';
import OfferSection from './components/OfferSection';
import BrandsSection from './components/BrandsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CallToAction from '../../components/organisms/CallToAction';
import Experience from '../../components/atoms/Experience';

const HomePage = () => {
  return (
    <main>
      <HeaderSection />
      <QuoteSection />
      <ProcessSection />
      <OfferSection />
      <CallToAction />
      <Experience />
      <BrandsSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
};

export default HomePage;
