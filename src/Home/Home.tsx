import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from '../Components/Footer';
import AppAppBar from './components/AppAppBar';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights';

export default function Home() {
  return (
    <Box>
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        {/* <LogoCollection /> */}
        <Divider />
        <Features />
        {/* <Divider /> */}
        {/* <Testimonials /> */}
        <Divider />
        <Highlights />
        {/* <Divider /> */}
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
