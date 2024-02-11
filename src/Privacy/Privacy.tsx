import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../Components/Footer';
import PrivacyBody from './Body';
import PrivacyHeader from './Header';

export default function Privacy() {
  return (
    <Box>
      <CssBaseline />
      <PrivacyHeader />
      <Box sx={{ bgcolor: 'background.default' }}>
        <PrivacyBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
