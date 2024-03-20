import { Box, Container, Grid, Typography } from '@mui/material';
import { imagePaths } from '../../assets/imagePaths';

function AboutBody() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, sm: 2 },
        py: { xs: 8, sm: 10 },
        px: { sm: 10 }
      }}
    >  
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" paragraph>
            The Person Behind The App
          </Typography>
          <Typography variant="body1" paragraph>
            At the moment, our 'About Us' page is more of an 'About Me' story since I'm flying solo on this exciting venture. 
            Hey there! I'm Jari Polm, the founder and developer behind SiftStats. 
            Originally born in Germany, I made my way to Central Florida for a computer science degree at Rollins College.
          </Typography>
          <Typography variant="body1" paragraph>
            During my time at Rollins College, I was also a proud member of the soccer team, where we came tantalizingly close to reaching the NCAA Division 2 Final Four in 2022. 
            Those four years were incredibly formative, and possibly the best four years of my life so far. 
            SiftStats is only possible because of Rollins College and the wonderful people I met there.        
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: 'auto',
              display: 'block',
              margin: 'auto',
              height: {xs: 300, sm: 400},
              borderBottomRightRadius: 15,
              borderTopLeftRadius: 15,            
            }}
            src={imagePaths.me}
            alt="Founder"
          />
        </Grid>
      </Grid>
      <Box mt={4} mb={2}>
        <Typography variant="h5" paragraph>
          A Journey of Passion
        </Typography>
        <Typography variant="body1" paragraph>
          It all started with a simple idea: <strong>Creating a mobile app for college soccer</strong>. 
          The first time this idea popped into my head was in Summer 2021 after my Sophomore year. I was 
          always someone who enjoyed looking at other teams, tracking results standings and statistics. 
          However, this appeared really complicated to me in the United States. My freshmen year I did not even know which teams are in my conference.
        </Typography>
        <Typography variant="body1" paragraph>
          Later on, I realized that all the information I am looking for are scattered across different college or conference websites.
          From Germany I was used to one simple app where I could look everything app. With improved computer science skills, 
          plenty of highs and lows, and a deeper understanding of the college sports system, I completed the development of a testing version of a college soccer app in May 2023.
        </Typography>
        <Typography variant="body1" paragraph>  
          Half a year later, fueled by the positive feedback on this initial version, 
          I made the decision to found the company UniSports Technology LLC to host the app SiftStats 
          and to extend its development to cover all college sports.
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h5" paragraph>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
        The core principles driving this app are simplicity and user-friendliness. My aim is to foster a college sports community that discovers fresh ways to connect with the game. 
        I am committed to ensuring equal coverage across genders and divisions. 
        Since the start of my journey, I have understood and experienced college sports in a different, more engaging way. I hope you will too.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" paragraph>
          Where We Are Today
        </Typography>
        <Typography variant="body1" paragraph>
        Fast forward to today (March 2024), and SiftStats has just dropped its first app version on the App Store and Play Store. 
        We've got Soccer, Volleyball, and Ice Hockey covered—before and after the games. 
        But hey, we're not stopping there. We're working on adding live data and more sports because, 
        you know, we're all about improving the engagement with the game.
        Our love for college sports drives everything we do. 
        So yeah, stick around. It's gonna be fun.
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutBody;
