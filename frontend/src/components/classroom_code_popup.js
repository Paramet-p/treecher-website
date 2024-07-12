import { Box, createTheme, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CancelIcon from "@mui/icons-material/Cancel";
import axiosInstance from '../config/axios';
import { set } from 'react-hook-form';

function Classroom_code_popup(props) {

    const theme = createTheme()

    const [code, setCode] = useState([])

    useEffect( async () => {
        let code_result = await axiosInstance.get('classrooms/classroom')
        console.log(code_result.data[0].join_code)
        setCode(code_result.data[0].join_code)
    })
  return (
    <Box>
        <Dialog
        open={props.Open}
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
            {"รหัสห้องเรียน"}
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
            <Typography variant='h3'>
                {code}
            </Typography>
        </DialogContent>
        </Dialog>
  </Box>
  )
}

export default Classroom_code_popup