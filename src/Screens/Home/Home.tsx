import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import AppAppBar from './AppBar';
import FAQ from './Components/FAQ';
import Features from './Components/Features';
import Hero from './Components/Hero/Hero';
import Highlights from './Components/Highlights';

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
