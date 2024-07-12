import React, { useState } from "react";
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Quiz_popup3(props) {
  const theme = createTheme();

  const [close, setClose] = useState(false);

  const clickonClose = (props) => {
    setClose(!props.clickcheckpoint);
  };

  const [open3, setOpen3] = useState(false)
  
  const handleOpenPopup3 = () => {
    setOpen3(true)
  }

  const handleClosePopup3 = () => {
    setOpen3(false)
  }

  const [opensnackbar3, setOpensnackbar3] = useState(false);

  const handleClick3 = () => {
    setOpensnackbar3(true);
  };

  const handleClose3 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar3(false);
  };

  const Checkpoint3 = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar3} autoHideDuration={6000} onClose={handleClose3}>
          <Alert onClose={handleClose3} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้ คุณคือสุดยอดนักประหยัดพลังงาน
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
            {"แบบฝึกหัดการประหยัดพลังงาน"}
          </Typography>
          <IconButton
            aria-label="CancelIcon"
            size="small"
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
              รีดผ้าครั้งละหลายๆชิ้น เป็นการประหยัดพลังงาน ใช่หรือไม่ ?
            </DialogContentText>
          </Box>
          <Box component="div" sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://www.img.in.th/images/31cc5aba4286e2bba54c974c0b22e54a.jpg"
              alt="ironing.png"
              sx={{ width: { xs: 150, md: 275 }, height: { xs: 150, md: 200 } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<CheckCircleOutlineIcon />}
            variant="contained"
            color="success"
            onClick={props.clickcheckpoint}
            onClose={close}
            // onClose={}
            // onClick={(props) => {props.checkpoint && props.handleclose}}
          >
            ใช่
          </Button>
          <Button 
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<DoNotDisturbAltIcon />}
            variant="contained"
            color="error"
            onClick={props.handleclose}
          >
            ไม่ใช่
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Quiz_popup3;


