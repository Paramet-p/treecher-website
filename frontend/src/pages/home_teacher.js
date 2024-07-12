import React, { useState } from 'react';
import { Drawer, Grid } from '@mui/material'
import { useTheme, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import Left_Menu from '../components/teacher/left_menuth'
import Avartar_mobile from '../components/teacher/avartar_mobile'
import Create_classroomPopup_th from '../components/teacher/create_classroompopup_th';
import Left_slidebar_th from '../components/teacher/left_slidebar_th';
import Classroom_list_th from '../components/teacher/classroom_list_th';
import Navbar_moblie from '../components/navbar_mobile';
import Left_Menu_th from '../components/teacher/left_menuth';

const useStyles = makeStyles(({ theme = useTheme() }) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
  avartar_mobile: {
    alignItems: 'right', 
    justifyContent: 'flex-end',
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  gridavartar :{
    paddingTop: theme.spacing(10),
    border: "1px solid black", 
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  
}));


function Home_teacher() {

  const classes = useStyles()

  const [open, setOpen] = useState(false)
  
  const handleOpenPopup = () => {
    setOpen(true)
  }

  const handleClosePopup = () => {
    setOpen(false)
  }

  const [openslide, setOpenslide] = useState(false)

  const toggleslider = () => {
    setOpenslide(!openslide)
  }


  return (
    <Box > 
      <Box component='div' sx={{ display: {md: 'none'}, position: 'sticky', top: 0 }}>
        <Navbar_moblie toggleslider={toggleslider} />
      </Box>
      <Grid container>
        <Grid item sm={1.8} sx={{display: { xs: 'none', md: 'flex' }, position: 'fixed'}}>
          <Left_Menu_th openpopup={handleOpenPopup}/>
        </Grid>
        <Drawer open={openslide} anchor="left" onClose={toggleslider}>
            <Left_slidebar_th openpopup={handleOpenPopup} />
        </Drawer>
        <Grid item xs> 
          <Grid item classname={classes.gridavartar}>
            <Avartar_mobile className={classes.avartar_mobile}/>
          </Grid>
          <Grid item xs sx={{ marginLeft: {md:"15%"} }}>
            <Classroom_list_th />
            <Create_classroomPopup_th Open={open} setopen={setOpen} handleClose={handleClosePopup}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  )
}

export default Home_teacher