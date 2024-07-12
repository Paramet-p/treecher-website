import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, createTheme, IconButton, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axiosInstance from "../config/axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Quiz_popup1(props) {
  const theme = createTheme();

  const [ans1, setans1] = useState([])

  const [ans2, setans2] = useState([])

  const [Question, setQuestion] = useState([])

  useEffect( async () => {
    let res = await axiosInstance.get('classrooms/quiz/question/answer')
    let question = await axiosInstance.get('classrooms/quiz/question')
    console.log(res.data[0].question.content)
    console.log(question.data[0])
    setQuestion(question.data[0])
    setans1(res.data[0])
    setans2(res.data[1])
  }, [])

  const [opensnackbar1, setOpensnackbar1] = useState(false);

  const handleClick1 = () => {
    setOpensnackbar1(true);
    props.setopen(false)

    axiosInstance.get('http://127.0.0.1:8000/api/classrooms/getans')
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar1(false);
  };

  const Checkpoint1 = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar1} autoHideDuration={2000} onClose={handleClose1}>
          <Alert onClose={handleClose1} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้! คุณได้รดน้ำต้นไม้แล้ว
          </Alert>
        </Snackbar>
      </Stack>
  )

   return (
    <Box>
      <Dialog
        open={props.Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleclose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ m: 0, p: 2, display: "flex" }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Kanit",
              marginLeft: theme.spacing(1),
              marginRight: theme.spacing(10),
              fontWeight: "bold",
            }}
          >
            {Question.question}
          </Typography>
          <IconButton
            aria-label="CancelIcon"
            size="medium"
            // color="disabled"
            onClick={props.handleclose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              marginLeft: { xs: theme.spacing(5), md: theme.spacing(8) },
            }}
          >
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="div" sx={{ textAlign: "center" }}>
            <DialogContentText  sx={{ fontFamily: "Kanit" }} id="alert-dialog-slide-description">
              {Question.content}
            </DialogContentText>
          </Box>
          <Box component="div" sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://www.img.in.th/images/816c46fd5f108794fd30c930e2577d3a.png"
              alt="wateringtheplant.png"
              sx={{ width: { xs: 150, md: 225 }, height: { xs: 150, md: 225 } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<CheckCircleOutlineIcon />}
            variant="contained"
            color="success"
            onClick={handleClick1}
          >
            {ans1.answer_text}
          </Button>
          <Button 
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<DoNotDisturbAltIcon />}
            variant="contained"
            color="error"
            onClick={props.handleclose}
          >
            {ans2.answer_text}
          </Button>
        </DialogActions>
      </Dialog>
      <Checkpoint1 />
    </Box>
  );
}

export default Quiz_popup1;


