import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../../Components/Footer';
import AppTermsBody from './Body';
import AppTermsHeader from './Header';

export default function AppTerms() {
  return (
    <Box>
      <CssBaseline />
      <AppTermsHeader />
      <Box sx={{ bgcolor: 'background.default' }}>
        <AppTermsBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
