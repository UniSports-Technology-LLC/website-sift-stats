import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import TermsBody from './Body';
import TermsHeader from './Header';

export default function Terms() {

  return (
    <Box>
      <CssBaseline />
      <TermsHeader />
      <Box sx={{ bgcolor: 'background.default' }}>
        <TermsBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
