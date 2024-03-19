import { Link, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ModeContext } from '../App';
import { imagePaths } from '../assets/imagePaths';

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
  const { mode } = useContext(ModeContext);

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
          <Box sx={{ 
            width: 'auto', 
            height: { xs: 100, sm: 200 }, 
            marginX: {xs: 'auto', sm: 0},
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
            {mode === 'dark' ?
              <img
                src={imagePaths.logo.dark}
                alt="SiftStats Logo"
                width={'auto'}
                height={'100%'}
                style={{
                  margin: 'auto'
                }}
              />
              :
              <img
                src={imagePaths.logo.light}
                alt="SiftStats Logo"
                width={'auto'}
                height={'100%'}
                style={{
                  margin: 'auto'
                }}
              />
            }
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
          <Link component={RouterLink} color="text.secondary" to="/about-us">
            About us
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
          <Link component={RouterLink} color="text.secondary" to="/terms-website">
            Terms
          </Link>
          <Link component={RouterLink} color="text.secondary" to="/privacy-website">
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
          <Link component={RouterLink} color="text.secondary" to="/privacy-website">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link component={RouterLink} color="text.secondary" to="/terms-website">
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
