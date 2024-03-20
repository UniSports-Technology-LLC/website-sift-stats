import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { contactEmail } from '../../../Constants/String';

function AppTermsBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
        {/* Terms of Service for SiftStats */}
        <Typography variant="body1" gutterBottom>Effective Date: March 5th, 2024</Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to SiftStats, a digital service provided by UniSports Technology LLC ("UniSports," "we," "us," or "our"). Accessing or using the SiftStats app ("App") signifies your agreement to be bound by these Terms of Service ("Terms"). For any inquiries, please contact us at {contactEmail}.
        </Typography>
        <Typography variant="body1" gutterBottom>
          By downloading or using the app, you acknowledge your acceptance of these Terms. Unauthorized copying, modification, attempt to extract the source code, or translation of the app is prohibited. The app and all associated intellectual property rights remain the property of UniSports Technology LLC.
        </Typography>
        
        {/* Section 1: Acceptance of Terms */}
        <Typography variant="h5" >1. Acceptance of Terms</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          By using the App, you confirm your understanding and agreement to these Terms. Should you disagree with any part of these Terms, you are prohibited from using the App.
          </Typography>
        </Container>
        
        {/* Section 2: Account Creation and Use */}
        <Typography variant="h5" >2. Account Creation and Use</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          The App allows usage both with and without creating an account. Account creation is optional but enables additional features. Accurate and current information is required for account holders.
          </Typography>
        </Container>
        
        {/* Section 3: License to Use */}
        <Typography variant="h5" >3. License to Use</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          You are granted a limited, non-exclusive, non-transferable, and revocable license to use the App for personal, non-commercial purposes, subject to these Terms.
          </Typography>
        </Container>
        
        {/* Section 4: Acceptable Use */}
        <Typography variant="h5" >4. Acceptable Use</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          You agree to use the App lawfully and not to engage in activities that could damage UniSports or other users.
          </Typography>
        </Container>
        
        {/* Section 5: Public Display of Data */}
        <Typography variant="h5" >5. Public Display of Data</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          UniSports Technology LLC imposes specific conditions for all end users regarding Data from the App:
          </Typography>
          <Typography variant="body1" gutterBottom ml={2}>- Limited Purpose: Data access is for personal use of our products and services without rights to commercialize, reproduce, or distribute.</Typography>
          <Typography variant="body1" gutterBottom ml={2}>- Prohibited Uses: Including commercial use, modification, distribution, or use of NCAA trademarks without consent.</Typography>
          <Typography variant="body1" gutterBottom ml={2}>- Ownership: The NCAA retains all rights to the Data and trademarks. Access does not confer ownership rights.</Typography>
        </Container>
        
        {/* Section 6: Intellectual Property Protection */}
        <Typography variant="h5" >6. Intellectual Property Protection</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          Content within the App, aside from NCAA-owned Data, is the property of UniSports Technology LLC or its licensors and cannot be used without prior written consent.
          </Typography>
        </Container>
        
        {/* Section 7: Termination and Account Suspension */}
        <Typography variant="h5" >7. Termination and Account Suspension</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          UniSports reserves the right to suspend or terminate accounts or access for breaches of these Terms.
          </Typography>
        </Container>
        
        {/* Section 8: Privacy Policy */}
        <Typography variant="h5" >8. Privacy Policy </Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          Our{' '}
          <Link component={RouterLink} to="/privacy-app">
          Privacy Policy          
          </Link>
          , which details our data handling practices, is incorporated into these Terms by reference.
          </Typography>
        </Container>
        
        {/* Section 9: Limitation of Liability */}
        <Typography variant="h5" >9. Limitation of Liability</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          UniSports will not be liable for indirect or consequential damages related to your use of the App.
          </Typography>
        </Container>
        
        {/* Section 10: Disclaimers */}
        <Typography variant="h5" >10. Disclaimers</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          The App is provided "as is" with no warranties. We strive for accuracy but cannot guarantee the reliability of NCAA data provided.
          </Typography>
        </Container>
        
        {/* Section 14: Third Party */}
        <Typography variant="h5" >11. Third Party</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          The App uses the following third-party services with their own Terms and Conditions.
          </Typography>
          <Typography variant="body1" gutterBottom ml={2}>- Google Play Services</Typography>
          <Typography variant="body1" gutterBottom ml={2}>- Firebase Crashlytics</Typography>
          <Typography variant="body1" gutterBottom ml={2}>- Expo</Typography>
        </Container>

        {/* Section 12: Governing Laws */}
        <Typography variant="h5" >12. Governing Laws</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          These Terms are governed by the laws of the State of Florida.
          </Typography>
        </Container>

        {/* Section 13: Changes to These Terms */}
        <Typography variant="h5" >13. Changes to These Terms</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          We reserve the right to amend these Terms at any time, with changes effective upon posting in the App.
          </Typography>
        </Container>

        {/* Section 14: Contact Us */}
        <Typography variant="h5" >14. Contact Us</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          For questions regarding these Terms, please reach out to us at {contactEmail}.
          </Typography>
        </Container>
    </Container>
  );
}

export default AppTermsBody;
