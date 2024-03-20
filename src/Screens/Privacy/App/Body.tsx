import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { contactEmail } from '../../../Constants/String';

function AppPrivacyBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
      {/* Privacy Policy for SiftStats */}
      <Typography variant="body1" gutterBottom>Effective Date: March 5th, 2024</Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to SiftStats, a service provided by UniSports Technology LLC (“we,” “us,” or “our”). SiftStats is offered as a free app intended for use as is. This Privacy Policy is designed to inform visitors and users of our app ("you") regarding our policies with the collection, use, and disclosure of Personal Information for anyone who decides to use our Service.
      </Typography>
      <Typography variant="body1" gutterBottom>
        By choosing to use our Service, you agree to the collection and use of information in accordance with this policy. The Personal Information we collect is used for providing and improving the Service. Except as described in this Privacy Policy, we will not use or share your information with anyone.
      </Typography>
      
      {/* Section 1: Information Collection and Use */}
      <Typography variant="h5" >1. Information Collection and Use</Typography>
      <Container>
        <Typography variant="body1" gutterBottom fontWeight={'bold'}>a. Information You Provide to Us</Typography>
        <Typography variant="body1" gutterBottom ml={2}>
          - Account Information: For account creation, you are required to provide your first name and email address, and to create a password. After creating your account, you may optionally provide additional information such as your nationality, birthdate, and a profile picture.
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>
          - If you choose not to create an account, you can still utilize our app without disclosing any personal information. However, please note that opting out of account creation may impact the accessibility of specific features within our Service.
        </Typography>
      </Container>
      <Container>
        <Typography variant="body1" gutterBottom fontWeight={'bold'}>b. Information Collected Automatically</Typography>
        <Typography variant="body1" gutterBottom ml={2}>
          - Log Data: In the event of an error in the app, we collect data and information (through third-party products) on your phone called Log Data. This may include details such as your device's Internet Protocol (“IP”) address, device name, operating system version, app usage statistics, and the time and date of your use of the Service.
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>
          - Cookies and Third-Party Tracking: We and our third-party partners may use cookies and similar tracking technologies to track activity on our Service.
        </Typography>
      </Container>
      
      {/* Section 2: Use of Data */}
      <Typography variant="h5" >2. Use of Data</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          We use your information for the following purposes:
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>- To facilitate account creation and login process.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- To personalize your experience on our app.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- For app analytics and improvement.</Typography>
      </Container>
      
      {/* Section 3: Sharing Your Information */}
      <Typography variant="h5" >3. Sharing Your Information</Typography>
      <Container>
        <Typography variant="body1" gutterBottom fontWeight={'bold'}>
          Sharing Within Our App Community
        </Typography>
        <Typography variant="body1" gutterBottom>
          For users who choose to link their account to a player profile, please be aware that certain personal information you provide, specifically your birthdate, nationality, and profile picture, will be visible to other users of our app. This feature is designed to enhance the community aspect of SiftStats, allowing users to engage with and learn more about different players within the app. We believe this promotes a richer, more connected user experience but want to ensure you are informed and comfortable with these settings.
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={'bold'} mt={2}>
          Sharing With Third-Party Service Providers
        </Typography>
        <Typography variant="body1" gutterBottom>
          We share your information with third-party service providers to perform services on our behalf, such as:
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Firebase for data storage and authentication.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- MailerSend for sending transactional emails.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Google Analytics for analytics purposes.</Typography>
        <Typography variant="body1" gutterBottom>
          We ensure all third-party service providers adhere to strict data protection and confidentiality standards.
        </Typography>
      </Container>
      
      {/* Section 4: Security */}
      <Typography variant="h5" >4. Security</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet or method of electronic storage is 100% secure.
        </Typography>
      </Container>
      
      {/* Section 5: Your Rights */}
      <Typography variant="h5" >5. Your Rights</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          You have the right to access, update, delete, or transfer your personal information. You may exercise these rights by contacting us at {contactEmail}. You can also access, update or delete your account and associated personal information through the mobile app.
          Detailed information on how to delete your account through the app can be found{' '}
          <Link component={RouterLink} to="/delete-account">
            here
          </Link>
          .
        </Typography>
      </Container>
      
      {/* Section 6: Consent */}
      <Typography variant="h5" >6. Consent</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          By signing up for an account with SiftStats, you explicitly consent to the collection, use, and storage of your personal information as outlined in this Privacy Policy. You have the right to withdraw your consent at any time. To do so, please contact us at {contactEmail}. Withdrawal of consent may affect the availability of certain features of our Service.
        </Typography>
      </Container>
      
      {/* Section 7: Children’s Privacy */}
      <Typography variant="h5" >7. Children’s Privacy</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.
        </Typography>
      </Container>
      
      {/* Section 8: Compliance with Laws */}
      <Typography variant="h5" >8. Compliance with Laws</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          We comply with applicable laws and regulations, including, but not limited to GDPR, CCPA, and PIPEDA, respecting your privacy and data protection rights.
        </Typography>
      </Container>
      
      {/* Section 9: User Rights Under GDPR, CCPA, and PIPEDA */}
      <Typography variant="h5" >9. User Rights Under GDPR, CCPA, and PIPEDA</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          At SiftStats, we are committed to ensuring the protection of your data and upholding your rights under the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and the Personal Information Protection and Electronic Documents Act (PIPEDA). Here's a summary of your rights under these laws:
        </Typography>
        <Typography variant="body1" gutterBottom fontWeight={'bold'} mt={2}>
          Rights Under GDPR (European Union)
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right of Access: You have the right to access your personal data that we hold.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Rectification: You can request to correct any inaccurate or incomplete personal data.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Erasure: Also known as the 'Right to be Forgotten', you can request the deletion of your personal data under certain conditions.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Restrict Processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Data Portability: You have the right to receive your personal data in a structured, commonly used and machine-readable format.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Object: You have the right to object to the processing of your personal data under certain conditions.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Rights in relation to automated decision making and profiling: You have the right not to be subject to a decision based solely on automated processing.</Typography>
        <Typography variant="body1" gutterBottom fontWeight={'bold'} mt={2}>
          Rights Under CCPA (California, USA)
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Know: You can request information about the collection, use, and sharing of your personal data.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Delete: You have the right to request the deletion of your personal data.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Opt-Out: You have the right to opt-out of the sale of your personal data to third parties.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Non-Discrimination: You have the right not to receive discriminatory treatment for exercising your privacy rights under the CCPA.</Typography>
        <Typography variant="body1" gutterBottom fontWeight={'bold'} mt={2}>
          Rights Under PIPEDA (Canada)
        </Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Access: You can request access to your personal information and how it’s used and disclosed.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Rectification: You have the right to correct inaccuracies in your personal information.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Right to Challenge Compliance: You have the right to challenge our compliance with the above rights regarding your personal information.</Typography>
        <Typography variant="body1" gutterBottom ml={2}>- Consent: Your personal information can only be collected, used, or disclosed with your knowledge and consent, except where inappropriate.</Typography>
        <Typography variant="body1" gutterBottom>
          To exercise any of these rights, please contact us at {contactEmail}. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
        </Typography>
      </Container>
      
      {/* Section 10: Changes to This Privacy Policy */}
      <Typography variant="h5" >10. Changes to This Privacy Policy</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          We may update our Privacy Policy from time to time. We will notify you of any changes by updating the “effective date” at the top of this policy. We encourage you to review our Privacy Policy periodically.
        </Typography>
      </Container>
      
      {/* Section 11: Contact Us */}
      <Typography variant="h5" >11. Contact Us</Typography>
      <Container>
        <Typography variant="body1" gutterBottom>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at {contactEmail}.
        </Typography>
      </Container>
    </Container>
  );
}

export default AppPrivacyBody;
