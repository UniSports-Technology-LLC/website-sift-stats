import { Stack, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import appStore from '../../assets/app-store-badge.svg';
import playStore from '../../assets/google-play-badge.png';

export default function AppStores() {
  return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
        >
            <Box
            id="appstore"
            sx={(theme) => ({
                mt: { xs: 2, sm: 6 },
                borderRadius: '10px',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: { xs: 40, sm: 80 },
                width: { xs: 100, sm: 200 },
                outline: '1px solid',
                outlineColor:
                theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
                boxShadow:
                theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                display: 'flex', // Add display: flex
            })}>
                <Box 
                    sx={() => ({
                    alignSelf: 'center',
                    justifySelf: 'center',
                    height: { xs: 27, sm: 55 },
                    width: { xs: 90, sm: 180 },
                    backgroundImage: `url(${appStore})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    })}
                />
            </Box>

            <Box
                id="playstore"
                sx={(theme) => ({
                mt: { xs: 2, sm: 6 },
                alignSelf: 'center',
                height: { xs: 40, sm: 80 },
                width: { xs: 100, sm: 200 },
                backgroundImage: `url(${playStore})`,
                backgroundSize: 'contain',
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
            />
        </Stack>
    );
}
