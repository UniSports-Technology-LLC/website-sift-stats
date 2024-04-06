import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../../Components/Footer';
import LegalHeader from '../../../Components/Legal/Header';
import AppTermsBody from './Body';

export default function AppTerms() {
  return (
    <Box>
      <CssBaseline />
      <LegalHeader title='TERMS OF SERVICE' subtitle='for Mobile Application' />
      <Box sx={{ bgcolor: 'background.default' }}>
        <AppTermsBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
