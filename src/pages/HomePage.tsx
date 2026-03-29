import Hero from '../components/Sections/Hero';
import ServicesPreview from '../components/Sections/ServicesPreview';
import WhyUs from '../components/Sections/WhyUs';
import PortfolioPreview from '../components/Sections/PortfolioPreview';
import CallToAction from '../components/Sections/CallToAction';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <PortfolioPreview />
      <CallToAction />
    </>
  );
}
