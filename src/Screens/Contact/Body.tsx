import { Container, Typography } from '@mui/material';

const contactEmail = 'contact@siftstats.com'

function ContactBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >  
      <Container>
        <Typography variant="h5">Our Address</Typography>
        <Typography variant="body1">907 SE 13th Place Unit B</Typography>
        <Typography variant="body1">Cape Coral, FL 33990</Typography>
        <Typography variant="body1">United States of America</Typography>
      </Container>

      <Container>
        <Typography variant="h5">Email Us</Typography>
        <Typography variant="body1" gutterBottom>
          Have any questions, feedback, or need support? Email us at{' '}
          <span style={{ color: '#368bec' }}>{contactEmail}</span>
        </Typography>
      </Container>
    </Container>
  );
}

export default ContactBody;
