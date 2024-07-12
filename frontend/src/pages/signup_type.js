import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles"
import Tree from "../assets/TCH1.png";


const useStyles = makeStyles({
  icon: {
    fontSize: "100%",
    color: "white"
  },
  student_button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    // '&:hover': {
    //     backgroundColor: '#fff',
    //     color: '#3c52b2', }
  },
  teacher_button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  signup_button :{
    marginTop: 5,
    mt: 3, 
    mb: 2,
    background: 'linear-gradient(45deg, #3bc206 30%, #ebeb3b 95%)',
  }
  ,
})

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${Tree})`
        }
      }
    }
  }
});

function SignUp_Type() {

  const classes = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      firstname: data.get("firstName"),
      lastname: data.get("lastName") ,
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: { xs: 2, md: 3 },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F5F5F5",
            padding: 2,
            borderRadius: 10,
            // border: 5,
            borderColor: "green",
            alignItems: "center",
            height: "100%"
          }}
        >
          <Container
            sx={{
              marginTop: { xs: 0, sm: 6 },
              display: "flex",
              padding: 2,
              borderRadius: 5,
              flexDirection: "column",
              backgroundColor: "success.main",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: 150, height: 150, backgroundColor: "success.main" }}
            >
              <img
                src="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png"
                alt="TreeCherLOGO.png"
                border="20"
                width="200"
              />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              color="white"
              sx={{ paddingTop: theme.spacing(2), fontFamily: "Kanit" }}
            >
              TREECHER
            </Typography>
          </Container>
          <Box>
              <Box component="h3" sx={{ textAlign: "center", fontFamily: "Kanit"}}>
                กรุณาเลือกบทบาท
              </Box>
              <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 1, }}>                            
                <Grid item>
                    <Button variant="contained" color="success" size="large" href="/signup/teacher"
                            startIcon={<FaceRetouchingNaturalIcon />}
                            className={classes.teacher_button}
                            sx={{ fontFamily: "Kanit", fontSize: 18, fontWeight: "bold" , width: { xs: 130, md:180 },
                                    padding: "50%"}}>
                        คุณครู
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="success" size="large" href="/signup/student"
                            startIcon={<ChildCareIcon />}
                            className={classes.student_button} 
                            sx={{ fontFamily: "Kanit", fontSize: 18, fontWeight: "bold", width: { xs: 130, md:180 },
                                     padding: "50%"}}>
                    นักเรียน
                    </Button>
                </Grid>
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp_Type;
