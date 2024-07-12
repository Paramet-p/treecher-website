import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Slide } from "@mui/material";
import Tree from "../assets/TCH1.png";
import { useForm } from "react-hook-form";
import config from "../config/config";


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


function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function SignUp_TH(props) {

  const classes = useStyles()

  const navigate = useNavigate()

  const { register, handleSubmit , formState: { errors }, watch } = useForm();

  const password = useRef();
  password.current = watch("password", "");

  const Submit_form = (event) => {
    // event.preventDefault();
    console.log(event)
    props.setcheckpoint(true)
    props.settransition(() => TransitionDown)
    // console.log(formData);
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    
    axios.post(`${config.apiUrlPrefix}user/create/th`,{
      email: event.email,
      first_name: event.firstName,
      last_name: event.lastName,
      password: event.password,
      confirm_password: event.confirm_password
    }).then((res) => {
      console.log(res.data)
      navigate('/login')
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: { xs: 2, md: 4 },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F5F5F5",
            padding: 2,
            borderRadius: 10,
            // border: 5,
            borderColor: "green",
            alignItems: "center",
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(Submit_form)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  autoFocus
                  color="success"
                  {...register("firstName", {required: "กรุณาใส่ชื่อ"})}
                  error={!!errors?.firstName}
                  helperText={errors?.firstName ? errors.firstName.message : null}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                  color="success"
                  {...register("lastName", {required: "กรุณาใส่นามสกุล"})}
                  error={!!errors?.lastName}
                  helperText={errors?.lastName ? errors.lastName.message : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  id="email"
                  label="อีเมล"
                  name="email"
                  autoComplete="email"
                  color="success"
                  {...register("email", {
                    required: "โปรดใส่อีเมล",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "กรุณาใส่อีเมลให้ถูกต้อง",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  name="password"
                  label="รหัสผ่าน"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  color="success"
                  {...register("password", { required: "กรุณาใส่รหัสผ่าน",
                    minLength: {
                      value: 8,
                      message: "รหัสผ่านอย่างน้อยต้องมี 8 ตัว"
                   }, })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  required
                  fullWidth
                  name="confirm_password"
                  label="ยืนยันรหัสผ่าน"
                  type="password"
                  id="confirm_password"
                  autoComplete="new-password"
                  color="success"
                  {...register("confirm_password", { required: "กรุณายืนยันรหัสผ่าน",
                  minLength: {
                    value: 8,
                    message: "รหัสผ่านขั้นต่ำต้องไม่ต่ำกว่า 8 ตัวอักษร",
                  }, 
                  validate: value =>
                  value === password.current || "รหัสผ่านไม่ตรงกัน"}
                  )}
                  error={!!errors?.confirm_password}
                  helperText={errors?.confirm_password ? errors.confirm_password.message : null}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.signup_button}
              sx={{ fontFamily: "Kanit", marginTop: 5, fontSize: 20, fontWeight: "bold" }}
            >
              ลงทะเบียน
            </Button>
            <Grid container justifyContent="flex-end" sx={{ marginTop: 2, marginBottom: 5 }}>
              <Grid item>
                <Link href="/login" variant="body2" sx={{ fontFamily: "Kanit" }}>
                  มีบัญชีอยู่แล้วใช่ไหม? ไปที่ล็อกอิน
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp_TH;
