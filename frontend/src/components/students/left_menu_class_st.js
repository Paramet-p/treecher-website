import { Button, Container, } from '@mui/material'
import React from 'react';
import { ExitToApp, Person, Settings, } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

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
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      color: "white",
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

function Left_Menu_class_st(props) {

  const classes = useStyles()

  return (
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
              sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}  href='/friends'>
            สมาชิก
          </Button>
          <Button startIcon = {<AssignmentIcon className={classes.icon} />} variant="contained"  
                  color={props.changecolor ? "success" : "check" }
              sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3), color: 'white'}} 
              onClick={props.handleClick} href='/quiz' >
            แบบฝึกหัด
          </Button>
          <Button startIcon = {<FilterVintageIcon className={classes.icon} />} variant="contained" color="success"
              sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }} href="/score_st" >
            คะแนน
          </Button>
          <Button startIcon = {<ExitToApp className={classes.icon} />} variant="contained" color="error" href="/login"
               sx={{ fontFamily: "Kanit", width: '95%', height: 50, fontSize: 16, marginBottom: theme.spacing(3) }}>
            ออกจากระบบ
          </Button>
      </Container>
      </ThemeProvider>
  );
}

export default Left_Menu_class_st;