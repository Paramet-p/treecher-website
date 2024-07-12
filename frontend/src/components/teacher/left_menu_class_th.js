import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { ExitToApp, Person } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import AddTaskIcon from "@mui/icons-material/AddTask";

const useStyles = makeStyles(({ theme = useTheme() }) => ({
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
  button:{
    width: "95%",
    height: 50,
    fontSize: 16,
    marginBottom: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
      color: "white",
    },
  },
  text: {
    fontWeight: 500,
    color: "white",
    [theme.breakpoints.down("md")]: {
      color: "white",
      display: "none",
    },
  },
  icon_button: {
    width: "auto",
    height: "auto",
  },
}));

function Left_Menu_class_th() {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Container className={classes.container}>
      <Button
        startIcon={<SchoolIcon className={classes.icon} />}
        variant="contained"
        color="success"
        href="/home_th"
        sx={{
          width: "95%",
          height: 50,
          fontSize: 16,
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        หน้าหลัก
      </Button>
      <Button
        startIcon={<Person className={classes.icon} />}
        variant="contained"
        color="success"
        href="/profile_th"
        sx={{
          width: "95%",
          height: 50,
          fontSize: 16,
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        โปรไฟล์
      </Button>
      <Button
        startIcon={<PeopleAltIcon className={classes.icon} />}
        variant="contained"
        color="success"
        href='/member_th'
        sx={{
          width: "95%",
          height: 50,
          fontSize: 16,
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        นักเรียน
      </Button>
      <Button
        startIcon={<AddTaskIcon className={classes.icon} />}
        variant="contained"
        color="success"
        href="/quizth"
        sx={{
          width: "95%",
          height: 50,
          fontSize: "14px",
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        สร้างแบบฝึกหัด
      </Button>
      <Button
        startIcon={<FilterVintageIcon className={classes.icon} />}
        variant="contained"
        color="success"
        href="/score_th"
        sx={{
          width: "95%",
          height: 50,
          fontSize: "12px",
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        คะแนนของนักเรียน
      </Button>
      <Button
        startIcon={<ExitToApp className={classes.icon} />}
        variant="contained"
        color="error"
        href="/login"
        sx={{
          width: "95%",
          height: 50,
          fontSize: 16,
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        ออกจากระบบ
      </Button>
    </Container>
  );
}

export default Left_Menu_class_th;
