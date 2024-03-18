import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Footer from '../../Components/Footer';
import DeleteAccountBody from './Body';
import DeleteAccountHeader from './Header';

export default function DeleteAccount() {
  return (
    <Box>
      <CssBaseline />
      <DeleteAccountHeader />
      <Box sx={{ bgcolor: 'background.default' }}>
        <DeleteAccountBody />
        <Divider />
        <Footer />
      </Box>
    </Box>
  );
}
