import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { ExitToApp, Person, Settings } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

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
      fontSize: "20px",
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
}));

function Left_Menu_th(props) {
  const classes = useStyles();

  const theme = createTheme();

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
        startIcon={<AddCircleIcon className={classes.icon} />}
        variant="contained"
        color="success"
        onClick={props.openpopup}
        sx={{
          width: "95%",
          height: 50,
          fontSize: 16,
          marginBottom: theme.spacing(3),
          fontFamily: "Kanit",
        }}
      >
        เพิ่มห้องเรียน
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

export default Left_Menu_th;
