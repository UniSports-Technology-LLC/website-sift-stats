import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import hero from "../../../../assets/hero.png";
import AppStores from './AppStore';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            College Sports&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Made Simple
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Elevate your college sports experience with intuitive design, ensuring easy access to crucial 
            information and enhancing your engagement with the game.
          </Typography>
          <AppStores />
        </Stack>
        {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage: `url(${imagePaths.hero})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        /> */}
        <Box
          sx={() => ({
            mt: { xs: 8, sm: 10},
            height: { xs: 200, sm: 500 },
            width: { xs: '100%', sm: 885 },
            borderRadius: '10px',
          })}
        >
          <iframe 
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L-pztpJwIR0?si=rzVUBIp4JNQABAov" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  );
}
