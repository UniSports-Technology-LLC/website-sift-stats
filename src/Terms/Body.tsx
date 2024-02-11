import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { appName, contactEmail } from '../Constants/String';

export default function TermsBody() {
  
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph alignSelf={'center'}>
          Hey there! Welcome to {appName} (aka the App). We're thrilled to have you here! These Terms of Service ("Terms") are here to make sure we're all on the same page. So sit back, relax, and let's dive in. By using the App, you're agreeing to these Terms. If you have any questions or concerns, just give us a shout.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        License to use:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          We're giving you a limited, non-exclusive, non-transferable, and revocable license to use the App for your personal enjoyment. So go ahead and explore, but remember, no sharing, selling, or modifying anything without our permission.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Acceptable Uses:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          Use the App in a way that respects others and follows the law. Be kind to fellow users and avoid anything that could cause trouble.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Prohibited Behaviors:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          Harassment, invasions of privacy, or anything that disrupts the community isn't allowed. Don't tamper with the App's inner workings or create software that interferes with it.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Termination and Account Suspension
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          Breaking the rules or causing chaos may result in your account being suspended. We'll try to notify you, but sometimes we need to act swiftly to maintain peace. You can always delete the App if you want to leave.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Intellectual Property Protection:
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph>
          The App and its content are protected by intellectual property laws. You can't copy, modify, or distribute anything without our permission. Respect the creators and their work.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Privacy Policy Information:
      </Typography>
      <Box>
        <Typography paragraph>
          We respect your privacy. Our Privacy Policy explains how we handle your personal information. By using the App, you consent to the collection, use, and disclosure of your information as outlined in the Privacy Policy.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Limitation Liability:
      </Typography>
      <Box>
        <Typography paragraph>
          We're not responsible for any issues or disruptions while using the App. Use it wisely and have a good time.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Disclaimers and Warranties:
      </Typography>
      <Box>
        <Typography paragraph>
          The App is provided as is, without any warranties, express or implied. We can't guarantee it'll be error-free or uninterrupted. Enjoy the ride, and we'll do our best to keep things awesome.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Governing Laws:
      </Typography>
      <Box>
        <Typography paragraph>
          These Terms are governed by the laws of the State of Florida. Any disputes will be handled within the local courts.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Changes to Your Terms:
      </Typography>
      <Box>
        <Typography paragraph>
          We may introduce new features or updates to the App. We'll notify you about any changes. Stay tuned, and we'll keep you informed.
        </Typography>
      </Box>

      <Typography variant="h5" alignSelf={'center'}>
        Contact Information:
      </Typography>
      <Box>
        <Typography paragraph>
        We're always here to chat, answer questions, or listen to your feedback. Reach out to us at {contactEmail}. We love hearing from you, so don't hesitate to say hello!
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography paragraph alignSelf={'center'}>
          By using the App, you're indicating that you've read, understood, and agreed to these Terms of Service. Thanks for joining the fun!
        </Typography>
      </Box>
    </Container>
  );
}
