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

function Quiz_popup4(props) {
  const theme = createTheme();

  const [close, setClose] = useState(false);

  const clickonClose = (props) => {
    setClose(!props.clickcheckpoint);
  };

  const [open4, setOpen4] = useState(false)
  
  const handleOpenPopup4 = () => {
    setOpen4(true)
  }

  const handleClosePopup4 = () => {
    setOpen4(false)
  }

  const [opensnackbar4, setOpensnackbar4] = useState(false);

  const handleClick4 = () => {
    setOpensnackbar4(true);
  };

  const handleClose4 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar4(false);
  };

  const Checkpoint4 = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar4} autoHideDuration={6000} onClose={handleClose4}>
          <Alert onClose={handleClose4} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้ คุณคือผู้ที่ใช้ไฟฟ้าได้อย่างปลอดภัย!
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
            {"แบบฝึกหัดการใช้เครื่องใช้ไฟฟ้าอย่างปลอดภัย"}
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
              จากภาพ เป็นการใช้เครื่องใช้ไฟฟ้าอย่างปลอดภัยหรือไม่
            </DialogContentText>
          </Box>
          <Box component="div" sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src="https://www.img.in.th/images/9d182b3c45b658a90dbb3b981be6d81c.jpg"
              sx={{ width: { xs: 300, md: 225 }, height: { xs: 250, md: 200 } }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<CheckCircleOutlineIcon />}
            variant="contained"
            color="success"
            onClick={props.handleclose}
          >
            ปลอดภัย
          </Button>
          <Button 
            sx = {{ fontFamily: "Kanit"}}
            startIcon={<DoNotDisturbAltIcon />}
            variant="contained"
            color="error"
            onClick={props.clickcheckpoint}
            onClose={close}
          >
            ไม่ปลอดภัย
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Quiz_popup4;


