import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, } from '@mui/material';
import { useForm } from 'react-hook-form';
import axiosInstance from '../../config/axios';
import { useNavigate } from 'react-router-dom';

function Create_classroomPopup_th(props) {

    const navigate = useNavigate()
    const { register, handleSubmit , formState: { errors } } = useForm();
    const Submit_CreateClassroom = (data) => {
      console.log(data)
      props.setopen(false)

      axiosInstance.post('classrooms/classroom/', {
        name: data.name,
        about: data.about
      }).then(
        navigate('/home_th', { replace: true })
      )
    }
  return (
    <Box >
      <Dialog open={props.Open} onClose={props.handleClose} >
        <DialogTitle sx={{ textAlign : 'center', fontFamily: "Kanit"  }}>
            สร้างห้องเรียน
        </DialogTitle>
        <Box component="form" noValidate onSubmit={handleSubmit(Submit_CreateClassroom)}>
          <DialogContent sx={{ fontFamily: "Kanit"}}>
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                autoFocus
                margin="dense"
                id="classroom_name"
                label="ชื่อห้องเรียน"
                fullWidth
                variant="standard"
                color="success"
                {...register("classroom_name", {required: "กรุณาใส่ชื่อห้องเรียน"})}
                error={!!errors?.classroom_name}
                helperText={errors?.classroom_name ? errors.classroom_name.message : null}
              />
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                autoFocus
                margin="dense"
                id="about"
                label="รายละเอียดห้องเรียน"
                fullWidth
                variant="standard"
                multiline
                color="success"
                {...register("about", {required: "กรุณาในรายละเอียดห้องเรียน"})}
                error={!!errors?.about}
                helperText={errors?.about ? errors.about.message : null}
              />          
          </DialogContent>
          <DialogActions >
            <Button sx={{ fontFamily: "Kanit" }} variant="contained" color= "error" onClick={props.handleClose}>ยกเลิก</Button>
            <Button type="submit" sx={{ fontFamily: "Kanit" }} variant="contained" color="success">ยืนยัน</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}

export default Create_classroomPopup_th