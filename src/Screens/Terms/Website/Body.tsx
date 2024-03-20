import { Container, Typography } from '@mui/material';
import { contactEmail } from '../../../Constants/String';

function WebsiteTermsBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
        {/* Terms of Service for Website */}
        <Typography variant="body1" gutterBottom>Effective Date: March 5th, 2024</Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the website of SiftStats, a mobile application provided by UniSports Technology LLC ("UniSports," "we," "us," or "our"). Your use of this website ("Website") constitutes your agreement to be bound by the following Terms of Service ("Terms"). For any inquiries, please contact us at {contactEmail}.
        </Typography>
        <Typography variant="body1" gutterBottom>
          By accessing or using this Website, you acknowledge your acceptance of these Terms. If you do not agree to these Terms, please refrain from using this Website.
        </Typography>
        
        {/* Section 1: Use of Website */}
        <Typography variant="h5" >1. Use of Website</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          This Website is solely for the purpose of promoting the SiftStats mobile application. You may view, download for caching purposes only, and print pages from the Website for your own personal use, subject to the restrictions set out below and elsewhere in these Terms.
          </Typography>
        </Container>
        
        {/* Section 2: Intellectual Property */}
        <Typography variant="h5" >2. Intellectual Property</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          All content on this Website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of UniSports Technology LLC or its licensors and is protected by copyright laws. You may not use any content from this Website without prior written consent from UniSports Technology LLC.
          </Typography>
        </Container>
        
        {/* Section 3: Links to Third-Party Websites */}
        <Typography variant="h5" >3. Links to Third-Party Websites</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          This Website may contain links to third-party websites for informational purposes. UniSports Technology LLC has no control over the content, privacy policies, or practices of these websites and assumes no responsibility for them. Your use of third-party websites is at your own risk.
          </Typography>
        </Container>
        
        {/* Section 4: Changes to Terms */}
        <Typography variant="h5" >4. Changes to Terms</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          UniSports Technology LLC reserves the right to update or modify these Terms of Service at any time without prior notice. Your continued use of this Website after any changes signifies your acceptance of the modified Terms.
          </Typography>
        </Container>
        
        {/* Section 5: Contact Us */}
        <Typography variant="h5" >5. Contact Us</Typography>
        <Container>
          <Typography variant="body1" gutterBottom>
          For questions regarding these Terms of Service, please contact us at {contactEmail}.
          </Typography>
        </Container>
    </Container>
  );
}

export default WebsiteTermsBody;
