import { Link, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { imagePaths } from '../assets/imagePaths';

const logoStyle = {
  width: '100',
  height: 'auto',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      SiftStats&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

function PoweredBy() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      Powered by UniSports Technology LLC
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
              <img
                src={imagePaths.logo}
                style={logoStyle}
                alt="logo of sift stats"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/aboutUs">
            About us
          </Link>
          <Link component={RouterLink} color="text.secondary" to="/careers">
            Careers
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/terms">
            Terms
          </Link>
          <Link component={RouterLink} color="text.secondary" to="/privacy">
            Privacy
          </Link>
          <Link component={RouterLink} color="text.secondary" to="/contact">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link component={RouterLink} color="text.secondary" to="/privacy">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/terms">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <PoweredBy />
        </Stack>
      </Box>
    </Container>
  );
}
