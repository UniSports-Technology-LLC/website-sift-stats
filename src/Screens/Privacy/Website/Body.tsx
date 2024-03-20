import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { contactEmail } from '../../../Constants/String';

function WebsitePrivacyBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
      <Typography variant="body1" gutterBottom>
        To view our Mobile Application Privacy Policy instead,{' '}
        <Link component={RouterLink} to="/privacy-app">
          click here
        </Link>.
      </Typography>
      
      {/* Privacy Policy for SiftStats Website*/}
      <Typography variant="body1" gutterBottom>Effective Date: March 5th, 2024</Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to SiftStats, the website provided by UniSports Technology LLC (“we,” “us,” or “our”). This Privacy Policy outlines our practices regarding the collection, use, and sharing of information when you visit our website.
      </Typography>
      
      {/* Section 1: Information Collection */}
      <Typography variant="h5" >1. Information Collection</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          When you visit our website, we do not collect any personal information or use cookies to track your activity.
        </Typography>
        <Typography variant="body1" gutterBottom>
          However, please be aware that our hosting platform, Firebase, may collect IP addresses for security and diagnostic purposes. This information is collected automatically and is not shared with us.
        </Typography>
      </Container>
      
      {/* Section 2: Use of Information */}
      <Typography variant="h5" >2. Use of Information</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          Any IP addresses collected by Firebase are used solely for security and diagnostic purposes, and are not shared with us or used for any other purposes.
        </Typography>
      </Container>
      
      {/* Section 3: Third-Party Services */}
      <Typography variant="h5" >3. Third-Party Services</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          Our website may contain links to third-party websites or services. Please note that this Privacy Policy does not apply to any third-party websites or services. We encourage you to review the privacy policies of those third-party websites or services before providing any personal information.
        </Typography>
      </Container>
      
      {/* Section 4: Changes to This Privacy Policy */}
      <Typography variant="h5" >4. Changes to This Privacy Policy</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          We may update our Privacy Policy from time to time. Any changes to this Privacy Policy will be posted on this page with an updated effective date.
        </Typography>
      </Container>
      
      {/* Section 5: Contact Us */}
      <Typography variant="h5" >5. Contact Us</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          If you have any questions or concerns about our Privacy Policy, please contact us at {contactEmail}.
        </Typography>
      </Container>
    </Container>
  );
}

export default WebsitePrivacyBody;
