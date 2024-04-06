import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import LegalHeader from '../../Components/Legal/Header';
import AboutBody from './Body';

export default function About() {
  return (
    <Box>
      <CssBaseline />
      <LegalHeader title='ABOUT US' />
      <Box sx={{ bgcolor: 'background.default' }}>
        <AboutBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
