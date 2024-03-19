import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import AboutBody from './Body';
import AboutHeader from './Header';

export default function About() {
  return (
    <Box>
      <CssBaseline />
      <AboutHeader />
      <Box sx={{ bgcolor: 'background.default' }}>
        <AboutBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
