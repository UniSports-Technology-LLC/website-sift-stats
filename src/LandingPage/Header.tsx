import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
  
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(4),
      }
    })
);
  
  
export default function Header() {
    const classes = useStyles();
  
    return (
    <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
            SiftStats
        </Typography>
        </Toolbar>
    </AppBar>
    );
}
  