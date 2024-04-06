import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../../Components/Footer';
import LegalHeader from '../../../Components/Legal/Header';
import PrivacyBody from './Body';

export default function AppPrivacy() {
  return (
    <Box>
      <CssBaseline />
      <LegalHeader title='PRIVACY POLICY' subtitle='for Mobile Application' />
      <Box sx={{ bgcolor: 'background.default' }}>
        <PrivacyBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
