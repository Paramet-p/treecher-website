import React from 'react'
import { Avatar, Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { createTheme } from "@mui/material/styles"
import EditIcon from '@mui/icons-material/Edit';

function Classroom_posts(props) {

    const theme = createTheme()

if(props.posts.author.is_student) {
  return (
    <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            height: 200,
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        <Paper elevation={5} variant="contained" sx={{ bgcolor: "#33995F", height: "100vh" }}>
          <Grid container >
            <Grid item xs={7} md={6} sx={{ display: 'flex'}}>
              <Avatar 
                  sx={{ fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#fcf872',color:'#000000', fontFamily: "Kanit",
                        display: { xs: 'flex' }, marginLeft: { xs: theme.spacing(2) ,md: theme.spacing(4) }, marginTop: theme.spacing(2)}} 
                  size="small" aria-label="avatar" >
                  {props.posts.author.avartar}
                </Avatar>
                <Typography variant="h6" 
                sx={{ fontFamily: "Kanit", marginTop: theme.spacing(2), marginLeft: theme.spacing(2), color: "white", fontFamily: "Kanit"}}>
                  {props.posts.author.first_name} {props.posts.author.last_name}
                  <Typography
                    sx={{ color: "white", fontFamily: "Kanit" }}>
                    {props.posts.published}
                  </Typography>
                </Typography>
            </Grid>
            <Grid item xs={5} md={6} sx={{ justifyContent: 'right' }}>
              <IconButton
                  aria-label="Editicon"
                  sx={{
                    color: "white",
                    paddingTop: "5%",
                    marginLeft: "75%",

                  }}
                >
                  <EditIcon />
                </IconButton> 
            </Grid>
            <Grid item xs={12} >
              <Box
                  component="h4" variant="contained"
                    sx={{ borderRadius: 5 ,marginLeft: {xs: theme.spacing(2), sm: theme.spacing(8), md: theme.spacing(10),},
                      paddingLeft: "1%", paddingRight: "3%", width: "80%", bgcolor: "#C9E265",  p: {xs:1, md:2}
                    }}
              >
                <Typography sx={{ fontFamily: "Kanit" }}>
                  {props.posts.content}
                </Typography>
              </Box>
            </Grid>
            {/* <Grid item xs>
              <IconButton aria-label="favoriteicon" 
                  sx={{ padding: "1%" , color: "red" }}>
                <FavoriteIcon />
              </IconButton>
              <Typography sx={{ fontFamily: "Kanit" ,color: "white", }}>
                14
              </Typography>
            </Grid> */}
          </Grid>
        </Paper>
      </Box>
  )
    } else {
        return (
            <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
        
                    width: "90%",
                    height: 200,
                    borderRadius: 3,
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
              >
                <Paper elevation={5} variant="contained" sx={{ bgcolor: "#33995F", height: "100vh" }}>
                  <Grid container >
                    <Grid item xs={7} md={6}sx={{ display: 'flex'}}>
                      <Avatar 
                          sx={{ fontFamily: "Kanit", fontWeight: 'bold',bgcolor: '#81DBEA',color:'#000000', fontFamily: "Kanit",
                          display: { xs: 'flex' }, marginLeft: { xs: theme.spacing(2) ,md: theme.spacing(4) }, marginTop: theme.spacing(2)}} 
                          size="small" aria-label="avatar" >
                          {props.posts.author.avartar}
                        </Avatar>
                        <Typography variant="h6" 
                        sx={{ fontFamily: "Kanit", marginTop: theme.spacing(2), marginLeft: theme.spacing(2), color: "white", fontFamily: "Kanit"}}>
                          {props.posts.author.first_name} {props.posts.author.last_name}
                          <Typography 
                            sx={{ color: "white", fontFamily: "Kanit" }}>
                            {props.posts.published}
                          </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={5} md={6}sx={{ justifyContent: 'right' }}>
                      <IconButton
                          aria-label="Editicon"
                          sx={{
                            color: "white",
                            paddingTop: "5%",
                            marginLeft: "75%",
        
                          }}
                        >
                          <EditIcon />
                        </IconButton> 
                    </Grid>
                    <Grid item xs={12} >
                      <Box
                          component="h4" variant="contained"
                            sx={{ borderRadius: 5 ,marginLeft: {xs: theme.spacing(2), sm: theme.spacing(8),md: theme.spacing(10),},
                              paddingLeft: "1%", paddingRight: "3%", width: "80%", bgcolor: "#C9E265", p: {xs:1, md:2}
                            }}
                      >
                        <Typography sx={{ fontFamily: "Kanit" }}>
                          {props.posts.content}
                        </Typography>
                      </Box>
                    </Grid>
                    {/* <Grid item xs>
                      <IconButton aria-label="favoriteicon" 
                          sx={{ padding: "1%" , color: "red" }}>
                        <FavoriteIcon />
                      </IconButton>
                      <Typography sx={{ fontFamily: "Kanit" ,color: "white", }}>
                        14
                      </Typography>
                    </Grid> */}
                  </Grid>
                </Paper>
              </Box> 
        )
    } 
}

export default Classroom_posts