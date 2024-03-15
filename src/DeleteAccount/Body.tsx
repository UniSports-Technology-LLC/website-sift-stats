import { Container, Typography } from '@mui/material';

const contactEmail = 'contact@siftstats.com'

function DeleteAccountBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
        
        {/* Section 1: Information Collection and Use */}
        <Typography variant="h5" >You can delete your account through one of two ways:</Typography>
        <Container>
          <Typography variant="body1" gutterBottom fontWeight={'bold'}>1. SiftStats Mobile Application</Typography>
          <Typography variant="body1" gutterBottom ml={2}>
            - Go to the starting screen and click on your profile in the top right.
          </Typography>
          <Typography variant="body1" gutterBottom ml={2}>
            - Choose "Account" and hit the "Delete" button.
          </Typography>
          <Typography variant="body1" gutterBottom ml={2}>
            - You'll need to type your password again to confirm it's you.
          </Typography>
          <Typography variant="body1" gutterBottom ml={2}>
            - Finally, confirm the deletion of your account.
          </Typography>
        </Container>
        <Container>
          <Typography variant="body1" gutterBottom fontWeight={'bold'}>2. Send us an email</Typography>
          <Typography variant="body1" gutterBottom ml={2}>
            Please send an email to <span style={{ color: '#368bec' }}>{contactEmail}</span> from the email address linked to your account, requesting the deletion of your account. Once your account is deleted, we'll send you a confirmation email.
          </Typography>
        </Container>
    </Container>
  );
}

export default DeleteAccountBody;
