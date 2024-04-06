import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ModeContext } from '../../App';
import ToggleColorMode from '../../Screens/Home/Components/ToggleColorMode';
import { imagePaths } from '../../assets/imagePaths';

function LegalAppBar() {
  const { mode, toggleColorMode } = useContext(ModeContext);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 1,
              }}
            >
              {mode === 'dark' ?
                <img
                  src={imagePaths.icon.dark}
                  alt="SiftStats Logo"
                  width={40}
                  height={'auto'}
                />
                :
                <img
                  src={imagePaths.icon.light}
                  alt="SiftStats Logo"
                  width={40}
                  height={'auto'}
                />
              }
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem>
                  <Link component={RouterLink} color="text.secondary" to="/">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link component={RouterLink} color="text.secondary" to="/terms-website">
                    Terms
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link component={RouterLink} color="text.secondary" to="/privacy-website">
                    Privacy
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link component={RouterLink} color="text.secondary" to="/contact">
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link component={RouterLink} color="text.secondary" to="/about-us">
                    About Us
                  </Link>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem>
                    <Link component={RouterLink} color="text.secondary" to="/">
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link component={RouterLink} color="text.secondary" to="/terms-website">
                      Terms
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link component={RouterLink} color="text.secondary" to="/privacy-website">
                      Privacy
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link component={RouterLink} color="text.secondary" to="/contact">
                      Contact
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link component={RouterLink} color="text.secondary" to="/about-us">
                      About Us
                    </Link>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default LegalAppBar;
