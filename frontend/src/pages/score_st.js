import { Drawer, Grid,Container } from '@mui/material'
import { Box } from '@mui/system'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import MuiAlert from '@mui/material/Alert';
import { Button } from "@mui/material";
import Avartarst_mobile from '../components/students/avartarst_mobile'

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { ExitToApp, Person } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Left_slidebar_class_st from '../components/students/left_slidebar_class_st';
import Score_result from '../components/students/score_result';
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import Navbar_moblie from '../components/navbar_mobile';


const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    check: createColor('#70ff68'),
  },
}); 

const useStyles = makeStyles(({ theme = createTheme() }) => ({
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
  }
}) )

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Score_st() {

  
  const left_menu_class_st_score = () => (
    <ThemeProvider theme={theme}>
        <Container className={classes.container} >
            <Button startIcon = {<SchoolIcon className={classes.icon} />} variant="contained" color="success" href="/home_st"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                หน้าหลัก
            </Button>
            <Button startIcon = {<Person className={classes.icon} />} variant="contained" color="success" href="/profile"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                โปรไฟล์
            </Button>
            <Button startIcon = {<PeopleAltIcon className={classes.icon} />} variant="contained" color="success" 
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: "white" }}  href='/friends'>
                สมาชิก
            </Button>
            <Button startIcon = {<AssignmentIcon className={classes.icon} />} variant="contained" color='success'
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: 'white'}} 
                 href='/quiz' >
                แบบฝึกหัด
            </Button>
            <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="check" 
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) , color: 'white'}} href='/score_st'>
                คะแนน
            </Button>
            <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" href="/login"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                ออกจากระบบ
            </Button>
        </Container>
    </ThemeProvider>
)

  const classes = useStyles()

  const [open, setOpen] = useState(false)
  
  const handleOpenPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }

  const [opensnackbar, setOpensnackbar] = useState(false);

  const handleClick = () => {
    setOpensnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar(false);
  };

  
  

  return (
    <Box position='flex'> 
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0}}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', md: 'flex' }, position: 'fixed'}}>
          {left_menu_class_st_score()}
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_st />
        </Drawer>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs sx={{ marginLeft: {md:"15%"}}} >
            
            <Score_result Open={open} handleclose={handleClosePopup} clickcheckpoint={handleClick}/>
            
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Score_st