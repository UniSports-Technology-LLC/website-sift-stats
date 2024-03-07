import { Container, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { contactEmail } from '../Constants/String';

export default function PrivacyBody() {
  
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
      <Typography variant="h5" alignSelf={'center'}>
        1. What Information We Collect:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          Hey there! We want you to know that your privacy matters to us. Our app doesn't collect any personal information from you, except for the stuff that the app store (like Apple App Store or Google Play Store) automatically collects. They do this to make sure everything runs smoothly and to follow their own rules. Here's what might be collected:
        </Typography>
        <Typography paragraph>
          - Device Information: We may collect general info about your device, like the model, operating system version, and unique identifiers. Don't worry, we only use this to make the app work better and give you a great experience.
        </Typography>
        <Typography paragraph>
          - : We might use some fancy tools, like Google Analytics, to see how people use our app. This helps us improve and know what's working. But don't worry, all the data is anonymous and can't personally identify you. It's just numbers and stats.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        2. Data Security:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          We take appropriate measures to protect the information collected and transmitted through our app. However, please note that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee the absolute security of your data.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        3. Third-Party Links:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          Our app may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those websites or services. We encourage users to read the privacy policies of any third-party websites or services they interact with.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        4. Children's Privacy:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          Our app does not knowingly collect personal information from individuals under the age of 13. If you are a parent or guardian and you become aware that your child has provided us with personal information without your consent, please contact us, and we will take steps to remove that information from our systems.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        5. Changes to this Privacy Policy:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and the "Last updated" date at the top of this policy will be revised accordingly. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        6. Contact Us:
      </Typography>
      <Box>
        <Typography paragraph>
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at 
          <Link href={`mailto:${contactEmail}`}> {contactEmail}</Link>.
        </Typography>
      </Box>
    </Container>
  );
}
