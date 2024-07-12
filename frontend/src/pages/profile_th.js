import { Avatar, Box, Button, Container, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ExitToApp, Person} from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import Avartarst_mobile from '../components/students/avartarst_mobile'
import CardProfile from './test_profile_th';
import Navbar from '../components/navbar';
import Navbar_moblie from '../components/navbar_mobile';
import Avartar_mobile from '../components/teacher/avartar_mobile';
import Whoami from '../config/whoami';
import Profile_card from '../components/profile_card';

const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }, 
   container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      color: "white",
    },
  },
  menuSliderContainer: {
    width: 200,
    background: "#008037",
    height: "100%"
  },
  listItem: {
    color: "white"
  },
}));

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    check: createColor('#70ff68'),
  },
});

function Profile_th() {

  const classes = useStyles()

  const user = Whoami()

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }

  const left_menuth_profile = () => (
    <ThemeProvider theme={theme}>
      <Container className={classes.container} >
            <Button startIcon = {<SchoolIcon className={classes.icon} />} variant="contained" color="success" href="/home_th"
              sx={{ fontFamily:"Kanit",width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
              หน้าหลัก
            </Button>
            <Button startIcon = {<Person className={classes.icon} />} variant="contained" color="check" href="/profile"
                sx={{ fontFamily:"Kanit",width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: "white", }}
                >
              โปรไฟล์
            </Button>
            <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" href="/login"
                sx={{fontFamily:"Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
              ออกจากระบบ
            </Button>

        </Container>
      </ThemeProvider>
  )
  
  const left_slidebar_th_profile = () => (
    <Box className={classes.menuSliderContainer} component="div">
        <Avatar
        sx={{width: 75, height: 75, backgroundColor: 'success.main', 
              marginLeft: theme.spacing(8), 
              marginTop: theme.spacing(3) , 
              marginBottom: theme.spacing(2)}} 
          >
            <img 
              src="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png" 
              alt="TreeCherLOGO.png"  
              border="0"
              width="75"
              />
        </Avatar>
        <Typography component="h2" variant="h5" color="white" 
                    sx={{ fontFamily: "Kanit", fontWeight: 500, paddingLeft: theme.spacing(6.5), 
                            paddingBottom: theme.spacing(1) }}>
          TreeCher
        </Typography>
        <List>
            <ListItem button component="a" href="/home_th">
                <ListItemIcon sx={{ color: 'white'}}>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary='หน้าหลัก' sx={{ color: 'white'}}/>
            </ListItem>
            <ListItem button component="a" href="/profile_th">
                <ListItemIcon sx={{ color: 'white'}}>
                    <Person />
                </ListItemIcon>
                <ListItemText primary='โปรไฟล์' sx={{ color: 'white'}}/>
            </ListItem>
            <ListItem button component="a" href="/login" >
                <ListItemIcon sx={{ color: 'white'}}>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary='ออกจากระบบ' sx={{ color: 'white'}}/>
            </ListItem>
        </List>
      </Box>
  )

  const profile_info = () => (
    <Box component="div">
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,

          width: "90%",
          height: "auto",
          borderRadius: 3,
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: 2,
        },
      }}
    >
      {/* <CardProfile /> */}
      <Profile_card user={user}/>
    </Box>
  </Box>
  )

  return (
    <ThemeProvider theme={theme}>
    <Box > 
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0 }}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container >
        <Grid item sm={1.8} sx={{display: { xs: 'none', md: 'flex' } , position: 'fixed' }}>
          {/* <Left_Menu_st openpopup={handleOpenPopup} /> */}
          {left_menuth_profile()}
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            {/* <Left_slidebar_st openpopup={handleOpenPopup} /> */}
            {left_slidebar_th_profile()}
          </Drawer>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs sx={{ marginLeft: {md:"15%"}}}>
            {profile_info()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default Profile_th