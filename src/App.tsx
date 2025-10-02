import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import MementoMori from './components/MementoMori';
import About from './components/About';
import Pillars from './components/Pillars';
import Initiation from './components/Initiation';
import Offerings from './components/Offerings';
import Code from './components/Code';
import Testimonials from './components/Testimonials';
import ApplicationForm from './components/ApplicationForm';
import FAQ from './components/FAQ';
import Ebook from './components/Ebook';
import CallToAction from './components/CallToAction';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ExitIntentPopup from './components/ExitIntentPopup';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-black text-gray-100 font-sans">
      <Navigation />
      <Hero />
      <Story />
      <MementoMori />
      <About />
      <Pillars />
      <Initiation />
      <Offerings />
      <Code />
      <Testimonials />
      <ApplicationForm />
      <FAQ />
      <Ebook />
      <CallToAction />
      <SocialLinks />
      <Footer />
      <ScrollToTop />
      <ExitIntentPopup />
    </div>
  );
}

export default App;
