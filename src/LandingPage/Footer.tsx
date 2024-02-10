import {
    Typography
} from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
  
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
    })
);
  
export default function Footer() {
    const classes = useStyles();
  
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            Sift Stats
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                College Stats Made Simple
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                Build by Unisports Technology LLC
            </Typography>
        </footer>
    );
}
  