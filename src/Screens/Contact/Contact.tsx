import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import LegalHeader from '../../Components/Legal/Header';
import ContactBody from './Body';

export default function Contact() {
  return (
    <Box>
      <CssBaseline />
      <LegalHeader title='CONTACT'/>
      <Box sx={{ bgcolor: 'background.default' }}>
        <ContactBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
