import React, { useState } from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography, } from '@mui/material'
import { useTheme , createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Whoami from '../config/whoami'
import MenuIcon from '@mui/icons-material/Menu';



const useStyles = makeStyles(({theme = useTheme()}) => ({
  appbar: {
    position: 'static',
    backgroundColor: '#008037'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: '#81DBEA',
    display: 'flex', 
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
}));


function Navbar_moblie(props) {

  const classes = useStyles()

  let user = Whoami()

  const theme = createTheme();

  if(user.is_student){
    return (
      <Box sx={{ flexGrow: 1 , position: 'sticky', top: 0 }}>
        <AppBar position='static' style={{backgroundColor: '#008037'}}>
          <Toolbar className={classes.toolbar}>
            <IconButton sx={{display: { xs: 'flex', md: 'none' }, color: 'white' , 
                        marginRight: { xs: theme.spacing(6), sm: theme.spacing(1)}}} 
                        onClick={props.toggleslider}>
              <MenuIcon sx={{display: { xs: 'flex', md: 'none' }}} className={classes.hamburger_icon}/>
            </IconButton>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display:'flex' }}
              >
                <Avatar sx={{width: 35, height: 35, backgroundColor: 'success.main',}} 
                  >
                  <img 
                      src="https://sgp1.vultrobjects.com/img-in-th/U9hKvN.png" 
                      alt="TreeCherLOGO.png"  
                      border="0"
                      width="36"/>
                  </Avatar>
              </IconButton>
            <Typography variant='h6' sx={{ fontFamily: "Kanit", display: 'flex' }}> 
              TreeCher
            </Typography>
            <Box sx={{ flexGrow: 100 }} />
            <container>
              <Box sx={{ flexGrow: 50}} />
              <Typography variant='h4'  sx={{ fontFamily: "Kanit", fontWeight: 'bold',color:'#ffffff',display: { xs: 'none', sm: 'flex' } }}> 
                  นักเรียน
              </Typography>
              <Box sx={{ flexGrow: 5 }} /> 
              <Typography variant='h6' sx={{ fontFamily: "Kanit", color: '#fcf872', display: { xs: 'none', sm: 'flex' } }}> 
                  {user.first_name} {user.last_name}
              </Typography>
            </container>
            <Box>
              <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls='#'
                  aria-haspopup="true"
                  onClick='#'
                  color="inherit"
                >
                  <Avatar 
                    sx={{ fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#fcf872',color:'#000000', 
                          display: { xs: 'none', sm: 'flex' }}} 
                    size="small" aria-label="avatar" >
                    {user.avartar}
                  </Avatar>
                </IconButton> 
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

  );}
  else {
    return (
      <Box sx={{ flexGrow: 1 , position: 'sticky', top: 0 }}>
        <AppBar position='static' style={{backgroundColor: '#008037'}}>
          <Toolbar className={classes.toolbar}>
            <IconButton sx={{display: { xs: 'flex', md: 'none' }, color: 'white' , 
                        marginRight: { xs: theme.spacing(6), sm: theme.spacing(1)}}} 
                        onClick={props.toggleslider}>
              <MenuIcon sx={{display: { xs: 'flex', md: 'none' }}} className={classes.hamburger_icon}/>
            </IconButton>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display:'flex' }}
              >
                <Avatar sx={{width: 35, height: 35, backgroundColor: 'success.main',}} 
                  >
                  <img 
                      src="https://sgp1.vultrobjects.com/img-in-th/U9hKvN.png" 
                      alt="TreeCherLOGO.png"  
                      border="0"
                      width="36"/>
                  </Avatar>
              </IconButton>
            <Typography variant='h6' sx={{ fontFamily: "Kanit", display: 'flex' }}> 
              TreeCher
            </Typography>
            <Box sx={{ flexGrow: 100 }} />
            <container>
              <Box sx={{ flexGrow: 50}} />
              <Typography variant='h4'  sx={{ fontFamily: "Kanit", fontWeight: 'bold',color:'#ffffff',display: { xs: 'none', sm: 'flex' } }}> 
                  คุณครู
              </Typography>
              <Box sx={{ flexGrow: 5 }} /> 
              <Typography variant='h6' sx={{ fontFamily: "Kanit", color: '#fcf872', display: { xs: 'none', sm: 'flex' } }}> 
                  {user.first_name} {user.last_name}
              </Typography>
            </container>
            <Box>
              <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls='#'
                  aria-haspopup="true"
                  onClick='#'
                  color="inherit"
                >
                  <Avatar 
                    sx={{ fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#81DBEA',color:'#000000', 
                          display: { xs: 'none', sm: 'flex' }}} 
                    size="small" aria-label="avatar" >
                    {user.avartar}
                  </Avatar>
                </IconButton> 
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

  );
  }

}

export default Navbar_moblie;