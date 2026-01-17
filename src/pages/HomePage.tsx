import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Couple from '../components/Couple';
import MantraMarquee from '../components/MantraMarquee';
import Rituals from '../components/Rituals';
import Gallery from '../components/Gallery';
import Blessings from '../components/Blessings';
import Family from '../components/Family';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-soft-cream min-h-screen selection:bg-wedding-red selection:text-white">
      <Navbar />
      <Hero />
      <Couple />
      <MantraMarquee />
      <Rituals />
      <Gallery />
      <Blessings />
      <Family />
      <Footer />
    </div>
  );
};

export default HomePage;
