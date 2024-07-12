import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Avatar , Container } from '@mui/material';
import Whoami from '../../config/whoami';

const useStyles = makeStyles(({theme = useTheme()}) => ({
    container: {
        paddingTop: theme.spacing(5),
        // paddingLeft: theme.spacing(10),
    },
    paper: {
        borderRadius: 20,
        p: 2,
        width: '100%',
        maxWidth: 'lg',
        [theme.breakpoints.up("sm")]: {
            display: "none",
          },
    },
    gridavatar: {
        paddingRight: theme.spacing(3)
   },
    text_teacher:{
        alignItem: 'center',
        paddingLeft: theme.spacing(2),
        color: 'white', 
    },
    text:{
        alignItem: 'center',
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: '#fcf872', 
    },
}))


function Avartar_mobile() {

    const classes = useStyles()

    const user = Whoami()

  return (
    <Container className={classes.container}>
        <Paper className={classes.paper} sx={{ bgcolor: '#008037'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography sx={{ fontFamily: "Kanit" }} gutterBottom variant="h4" component="div" className={classes.text_teacher}>
                                คุณครู
                            </Typography>
                            <Typography sx={{ fontFamily: "Kanit" }} variant="body2" gutterBottom className={classes.text} >
                            {user.first_name} {user.last_name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridavatar}>
                        <Avatar sx={{fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#81DBEA',color:'#000000', display: { xs: 'flex', sm: 'none' }}} size="small" aria-label="avatar">
                            {user.first_name}
                        </Avatar>
                    </Grid>
                </Grid>
            </Grid>
    </Paper>
</Container>
  );
}

export default Avartar_mobile;

