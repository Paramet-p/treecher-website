import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';
import React, { useState } from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Quiz_popup2 from '../quiz_popup2';
import Quiz_popup1 from '../quiz_popup1';
import Quiz_popup3 from '../quiz_popup3';
import Quiz_popup4 from '../quiz_popup4';


const useStyles = makeStyles(({ theme = createTheme() }) => ({
    container: {
      width: 'auto', 
      marginTop: theme.spacing(3), 
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(3),
      }
    },
    card_classroom: {
      maxWidth: 345 ,
      marginBottom: theme.spacing(3)
    }
  }));

function Quizth_made(props) {

    const classes = useStyles();

    const theme = createTheme();

    const [open1, setOpen1] = useState(false)
  
    const handleOpenPopup1 = () => {
      setOpen1(true)
    }
  
    const handleClosePopup1 = () => {
      setOpen1(false)
    }
  
    const [open2, setOpen2] = useState(false)
    
    const handleOpenPopup2 = () => {
      setOpen2(true)
    }
  
    const handleClosePopup2 = () => {
      setOpen2(false)
    }
  
    const [open3, setOpen3] = useState(false)
    
    const handleOpenPopup3 = () => {
      setOpen3(true)
    }
  
    const handleClosePopup3 = () => {
      setOpen3(false)
    }
  
    const [open4, setOpen4] = useState(false)
    
    const handleOpenPopup4 = () => {
      setOpen4(true)
    }
  
    const handleClosePopup4 = () => {
      setOpen4(false)
    }
  // popup

  return (
      <Container className={classes.container}>
        <Box component='div'
          sx={{ width: 160 , height: 'auto', alignItems: 'center',
                bgcolor: '#008037', color: 'white', display: 'flex',
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3),
                borderRadius: 3, }}>
          <AssignmentIcon sx={{ paddingLeft: theme.spacing(2) }}/>
          <Typography 
            sx={{ fontFamily : "Kanit", display:'flex' , fontWeight: 500 ,
                  padding: theme.spacing(2) , paddingLeft: theme.spacing(2.5)}}>
            แบบฝึกหัด
          </Typography>
        </Box>
        
        <Grid container sx={{ alignItems: "center" }}>
                  <Card sx = {{background: 'linear-gradient(45deg, #a1e7db 30%, #7ad154 90%)', marginRight: theme.spacing(4) }}  className={classes.card_classroom}>
                    <CardActionArea onClick={handleOpenPopup1}>
                      <CardMedia
                      component="img"
                      alt="green iguana"
                      height="250"
                      width="125"
                      image="https://www.img.in.th/images/d78a961684f161d6d40f9d613d670da0.png"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                          แบบฝึกหัดที่ 1
                        </Typography>
                        <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                          มารดน้ำต้นไม้กันเถอะ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions CardActions onClick={handleOpenPopup1}>
                      <Button sx={{ fontFamily: "Kanit"}} size="small">เข้าทำควิซ</Button>
                    </CardActions>
                    <Quiz_popup1 Open={open1} handleclose={handleClosePopup1}/>
                </Card>

                  <Card sx = {{background: 'linear-gradient(45deg, #f9e6d6 30%, #e1c4ba 60%)', marginRight: theme.spacing(4) }}  className={classes.card_classroom}>
                    <CardActionArea onClick={handleOpenPopup2}>
                      <CardMedia
                      component="img"
                      alt="green iguana"
                      height="250"
                      width="125"
                      image="https://www.img.in.th/images/2e3abb025b3a1680a25543d3e5009413.png"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                          แบบฝึกหัดที่ 2
                        </Typography>
                        <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                          มาแยกขยะกันเถอะ
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions CardActions onClick={handleOpenPopup2}>
                      <Button sx={{ fontFamily: "Kanit", color:'#593d5e'}} size="small">เข้าทำควิซ</Button>
                    </CardActions>
                    <Quiz_popup2 Open={open2} handleclose={handleClosePopup2}/>
                </Card>

                <Card sx = {{background: 'linear-gradient(45deg, #ffa73d 30%, #f1ff3a 90%)', marginRight: theme.spacing(4) }}  className={classes.card_classroom}>
                    <CardActionArea onClick={handleOpenPopup3}>
                      <CardMedia
                      component="img"
                      alt="green iguana"
                      height="250"
                      width="125"
                      image="https://www.img.in.th/images/4d6fc5420e9aa4169650cb14b340254f.png"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                          แบบฝึกหัดที่ 3
                        </Typography>
                        <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                          การใช้ไฟฟ้าอย่างประหยัด
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions CardActions onClick={handleOpenPopup3}>
                      <Button sx={{ fontFamily: "Kanit", color: "#461e4f"}} size="small">เข้าทำควิซ</Button>
                    </CardActions>
                    <Quiz_popup3 Open={open3} handleclose={handleClosePopup3}/>
                </Card>

                <Card sx = {{background: 'linear-gradient(45deg, #c691ff 30%, #829bff 90%)', marginRight: theme.spacing(4) }}  className={classes.card_classroom}>
                    <CardActionArea onClick={handleOpenPopup4}>
                      <CardMedia
                      component="img"
                      alt="green iguana"
                      height="250"
                      width="125"
                      image="https://www.img.in.th/images/52e57ea92bec5f87c0ec40099ea9db18.png"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit" ,fontWeight: 500 }}>
                          แบบฝึกหัดที่ 4
                        </Typography>
                        <Typography  gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500 }}>
                          การใช้ไฟฟ้าอย่างปลอดภัย
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions CardActions onClick={handleOpenPopup4}>
                      <Button sx={{ fontFamily: "Kanit", color: "#ffff02 "}} size="small">เข้าทำควิซ</Button>
                    </CardActions>
                    <Quiz_popup4 Open={open4} handleclose={handleClosePopup4}/>
                </Card>
                
              </Grid>
      </Container>
  )
}

export default Quizth_made