import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, Grid, Drawer} from '@mui/material';
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Avartar_mobile from "../components/teacher/avartar_mobile";

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { ExitToApp, Person } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import AddTaskIcon from "@mui/icons-material/AddTask";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";



import { createTheme,ThemeProvider } from '@mui/material/styles';

import Makequiz_form from "../components/teacher/makequiz_form";
import Navbar_moblie from "../components/navbar_mobile";
import Left_slidebar_class_th from "../components/teacher/left_slidebar_class_th";

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
    alignItems: "right",
    justifyContent: "flex-end",
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridavartar: {
    paddingTop: theme.spacing(10),
    border: "1px solid black",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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


function MakeQuiz_th() {

  const left_menu_class_th_quizmade = () => (
    <ThemeProvider theme={theme}>
        <Container className={classes.container} >
            <Button startIcon = {<SchoolIcon className={classes.icon} />} variant="contained" color="success" href="/home_th"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                หน้าหลัก
            </Button>
            <Button startIcon = {<Person className={classes.icon} />} variant="contained" color="success" href="/profile_th"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                โปรไฟล์
            </Button>
            <Button startIcon = {<PeopleAltIcon className={classes.icon} />} variant="contained" color="success" 
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: "white" }}  href='/member_th'>
                นักเรียน
            </Button>
            <Button startIcon = {<AddTaskIcon className={classes.icon} />} variant="contained" color="check" 
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: 'white'}} 
                 href='/quizmade' >
                สร้างแบบฝึกหัด
            </Button>
            <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="success"  
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) , color: 'white'}} href='/score_th'>
                คะแนน
            </Button>
            <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" href="/login"
                sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
                ออกจากระบบ
            </Button>
        </Container>
    </ThemeProvider>
)

  const classes = useStyles();

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }

  return (
    <Box position="flex">
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0 }}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container>
        <Grid item sm={1.8} sx={{ display: { xs: "none", md: "flex" }, position: 'fixed' }}>
          {left_menu_class_th_quizmade()}
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_th />
        </Drawer>
        <Grid item xs sx={{ marginLeft: {md:"15%"}}} >
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile} />
          </Grid>
          <Grid item xs>
            <Makequiz_form/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MakeQuiz_th;
