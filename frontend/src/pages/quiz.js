import { Drawer, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Avartarst_mobile from '../components/students/avartarst_mobile'
import Main_quiz from '../components/students/main_quiz'
import Quiz_popup from '../components/quiz_popup1';
import Left_Menu_class_st from '../components/students/left_menu_class_st';
import Left_slidebar_class_st from '../components/students/left_slidebar_class_st';
import Navbar_moblie from '../components/navbar_mobile';
;

const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }
}) )

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function Quiz() {

  const classes = useStyles()

  const [open, setOpen] = useState(false)
  
  const handleOpenPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
    setOpensnackbar(true)
  }

// popup


  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }
  const [opensnackbar, setOpensnackbar] = useState(false);

  const handleClick = () => {
    setOpensnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpensnackbar(false);
  };

  const Checkpoint = () => (
    <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ fontFamily: "Kanit", width: '100%' }}>
            เย้ คุณได้รดน้ำต้นไม้แล้ว
          </Alert>
        </Snackbar>
      </Stack>
  )



  return (
    <Box position='flex'> 
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0}}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', md: 'flex' }, position: 'fixed'}}>
          <Left_Menu_class_st />
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_class_st />
        </Drawer>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartarst_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs sx={{ marginLeft: {md:"15%"}}} >
            <Main_quiz Openpopup={handleOpenPopup}/>
            <Quiz_popup Open={open} handleclose={handleClosePopup} clickcheckpoint={handleClick}/>
            {Checkpoint()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Quiz