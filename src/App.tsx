import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewInStore } from './components/sections/NewInStore';
import { FavoriteFinds } from './components/sections/FavoriteFinds';
import { StudioSection } from './components/sections/StudioSection'; 
import HairSolutions from './components/sections/HairSolutions';
import { BrandStory } from './components/sections/BrandStory';
import { DIYExtensions } from './components/sections/DIYExtensions'; 
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/Footer'; 
import WhatsAppIcon from './components/WhatsAppIcon';
import RewardsButton from './components/RewardsButton';
import { Transformations } from './components/sections/Transformations';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <NewInStore />
      <StudioSection />
      <FavoriteFinds />
      <DIYExtensions/>
      <BrandStory />

      <HairSolutions/> 
      <Transformations/>
      <FAQSection/>
   
      <Footer/> 
      <WhatsAppIcon/> 
      <RewardsButton/>
    </div>
  );
}

export default App;