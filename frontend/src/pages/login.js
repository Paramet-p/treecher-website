import React, { useState } from "react";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container, Slide,} from "@mui/material";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosInstance from "../config/axios";
import Tree from "../assets/TCH1.png";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

});

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

function Login(props) {

  const navigate = useNavigate();

  const [alert_wrongpassword, setalert_wrongpassword] = useState(false)

  const [transition, setTransition] = useState(undefined);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setalert_wrongpassword(false);
  };

  const { register, handleSubmit , formState: { errors } } = useForm();

  const Submit_form = (event) => {

    console.log(event)
   
    axiosInstance.post(`token/`, {
      email: event.email,
      password: event.password,
    }).then((res) => {
      console.log(res.data.access)
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');

      axiosInstance.get(`user/whoami`).then((res) => {
        console.log(res.data)
        if(res.data){
          if(res.data.is_student){
            console.log("Hello Student", res.data.first_name);
            navigate('/home_st', { replace: true })
          }else{
            console.log("Hello Teacher", res.data.first_name)
            navigate('/home_th', { replace: true })
          }
        }
      })
    }).catch(() => {
      console.log("รหัสผ่านไม่ถูกต้อง")
      setalert_wrongpassword(true)
      setTransition(() => TransitionDown)
    })
  };

  const Checkpoint = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar 
          open={props.open} 
          autoHideDuration={2500} 
          onClose={props.close} 
          TransitionComponent={props.transition}
          anchorOrigin={{ vertical: 'top', horizontal: 'center',}}>
          <Alert  onClose={props.close} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            ยินดีด้วย! คุณได้ลงทะเบียนสำเร็จแล้ว 
          </Alert>
        </Snackbar>
      </Stack>
  )

  const Wrong_password = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar 
          open={alert_wrongpassword} 
          autoHideDuration={2500} 
          onClose={handleClose} 
          TransitionComponent={transition}
          anchorOrigin={{ vertical: 'top', horizontal: 'center',}}>
          <Alert  onClose={handleClose} severity="error" sx={{ fontFamily: "Kanit", width: '100%' }}>
            รหัสผ่านไม่ถูกต้อง
          </Alert>
        </Snackbar>
      </Stack>
  )

  return (
      <ThemeProvider theme={theme} >
        <Container component="main"  maxWidth="xs" >
          <CssBaseline />
          <Box
    
              sx={{
                marginTop: { xs: 0, sm: 5 },
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
                marginTop: { xs: 0, sm: 3 },
                display: "flex",
                flexDirection: "column",
                backgroundColor: "success.main",
                padding: 2,
                borderRadius: 10,
                border: 5,
                borderColor: "green",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: 150, height: 150, backgroundColor: "success.main" }}>
                <img
                    src="https://sgp1.vultrobjects.com/img-in-th/U9hKvN.png"
                    alt="TreeCherLOGO.png"
                    border="20"
                    width="200"
                  />
              </Avatar>
              <Typography component="h1" variant="h5" sx={{ color: "white", marginTop: 2}}>
                TREECHER
              </Typography>
            </Container>
            <Box component="form" noValidate onSubmit={handleSubmit(Submit_form)} sx={{ mt: 1 }}>
              <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="อีเมล"
                  name="email"
                  autoComplete="email"
                  color="success"
                  autoFocus
                  {...register("email", {
                    required: "กรุณาใส่อีเมล",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "กรุณาใส่อีเมลให้ถูกต้อง",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
              />
              <TextField
                  inputProps={{style: {fontFamily: "Kanit"}}} 
                  InputLabelProps={{style: {fontFamily: "Kanit"}}}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="รหัสผ่าน"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  color="success"
                  {...register("password", { required: "กรุณาใส่รหัสผ่าน",
                    minLength: {
                      value: 8,
                      message: "รหัสผ่านขั้นต่ำต้องไม่ต่ำกว่า 8 ตัวอักษร"
                   }, })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
              />
              <FormControlLabel 
                control={<Checkbox value="remember" color="primary" />}
                label={
                  <Typography sx={{ fontFamily: "Kanit" }}>
                    จดจำรหัสผ่าน
                  </Typography>
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" ,background: 'linear-gradient(45deg, #3bc206 30%, #ebeb3b 95%)', }}
              >
                  เข้าสู่ระบบ
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                href="/signup"
                sx={{ mb: 2, fontWeight: "bold", background: 'linear-gradient(45deg, #af4fff 30%,#5396fc  60%)' }}
              >
                ลงทะเบียน
              </Button>
            </Box>
          </Box>
          {Checkpoint()}
          {Wrong_password()}
        </Container>
      </ThemeProvider>

  );
}

export default Login;
