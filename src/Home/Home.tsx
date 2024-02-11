import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from '../Components/Footer';
import AppAppBar from './components/AppAppBar';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights';

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function Home({ mode, toggleColorMode }: AppAppBarProps) {
  return (
    <Box>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
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
