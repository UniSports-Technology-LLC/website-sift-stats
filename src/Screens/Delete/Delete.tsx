import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import LegalHeader from '../../Components/Legal/Header';
import DeleteAccountBody from './Body';

export default function DeleteAccount() {
  return (
    <Box>
      <CssBaseline />
      <LegalHeader title='ACCOUNT DELETION' />
      <Box sx={{ bgcolor: 'background.default' }}>
        <DeleteAccountBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
