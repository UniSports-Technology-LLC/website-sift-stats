import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography
} from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.main,
      marginBottom: theme.spacing(4),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

interface CardData {
  image: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Everything in one',
    description: 'Find all college data easily.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Show yourself',
    description: 'Connect your account to your player profile.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Favorites',
    description: 'Follow your favorites for quicker access.',
  },
];

export default function LandingPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to Sift Stats
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Here is College Sports!
            </Typography>
            <div style={{ width: '200px', margin: '0 auto' }}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />
    </React.Fragment>
  );
}
