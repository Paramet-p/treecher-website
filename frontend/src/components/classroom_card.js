import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createTheme, Typography } from '@mui/material'
import React from 'react'

function Classroom_card(props) {

    const theme = createTheme()

  return (
    <Box component="div">
        <Card sx = {{background: 'linear-gradient(45deg, #af4fff 30%,#5396fc  60%)', 
              flexDirection: 'column' , marginRight: theme.spacing(4), maxWidth: 345 , marginBottom: theme.spacing(3) }}>
            <CardActionArea href='/classroom_th'>
              <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              width="125"
              image="https://www.img.in.th/images/8174a40842545887fd91f9dc8df9adb9.png"/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500, color:"#ffffff" }}>
                  {props.classroom.name}
                </Typography>
                <Typography gutterBottom variant="body2" component="div" sx={{ fontFamily: "Kanit", fontWeight: 500, color:"#ffffff" }}>
                  {props.classroom.about}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions CardActions>
              <Button sx={{ fontFamily: "Kanit", color:"#000000" }} size="small" href='/classroom_th' >เข้าห้องเรียน</Button>
            </CardActions>
          </Card>
      </Box>
  )
}

export default Classroom_card