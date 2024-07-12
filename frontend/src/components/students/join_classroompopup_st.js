import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Slide, Snackbar, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

});

function Join_classroomPopup_st(props) {

  const [wrong_join_code, setWrong_join_code] = React.useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setWrong_join_code(false);
  };

  const navigate = useNavigate()

  const { register, handleSubmit , formState: { errors } } = useForm();
  const Submit_JoinClassroom = (data) => {
    console.log(data.classroom_code)
    props.setopen(false)

    axiosInstance.post('classrooms/join/',{
      join_code: data.classroom_code
    }).then(
      navigate('/home_st', { replace: true })
    )
    // .catch(
    //   console.log("รหัสห้องเรียนไม่ถูกต้อง"),
    //   setWrong_join_code(true),
    // )
  }

  // const Wrong_joincode = () => (
  //   <Stack spacing={2} sx={{ width: '100%' }}>
  //       <Snackbar 
  //         open={wrong_join_code} 
  //         autoHideDuration={2500} 
  //         onClose={handleClose} >
  //         <Alert  onClose={handleClose} severity="error" sx={{ fontFamily: "Kanit", width: '100%' }}>
  //           รหัสห้องเรียนไม่ถูกต้อง
  //         </Alert>
  //       </Snackbar>
  //     </Stack>
  // )
  
  return (
    <Box>
      <Dialog open={props.Open} onClose={props.handleClose}>
        <DialogTitle sx={{ textAlign : 'center', fontFamily: "Kanit" }}>
          {"รหัสห้องเรียน"}
          </DialogTitle>
        <Box component="form" noValidate onSubmit={handleSubmit(Submit_JoinClassroom)}>
          <DialogContent >
            <TextField
              inputProps={{style: {fontFamily: "Kanit"}}} 
              InputLabelProps={{style: {fontFamily: "Kanit"}}}
              autoFocus
              margin="dense"
              id="classroom_code"
              label="รหัสห้องเรียน"
              fullWidth
              variant="standard"
              color="success"
              {...register("classroom_code", {required: "กรุณาใส่รหัสห้องเรียน", 
              minLength: {
                value: 6,
                message: "รหัสเข้าห้องเรียนต้องไม่น้อยกว่า 6 ตัวอักษร"
             }})}
                error={!!errors?.classroom_code}
                helperText={errors?.classroom_code ? errors.classroom_code.message : null}
            />
          </DialogContent>
          <DialogActions >
            <Button variant="contained" color= "error" sx={{ fontFamily: "Kanit" }} onClick={props.handleClose}>ยกเลิก</Button>
            <Button type="submit" variant="contained" color="success" sx={{ fontFamily: "Kanit" }} >ยินยัน</Button>
          </DialogActions>
        </Box>
      </Dialog>
      {/* {Wrong_joincode()} */}
    </Box>
  );
}

export default Join_classroomPopup_st