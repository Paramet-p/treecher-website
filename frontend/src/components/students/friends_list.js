import { Avatar, Card, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Friends_list(props) {
  return (
    <Container >
    <div>
      <Box
        sx={{
          width: "100%",
          height: 40,
          borderRadius: 20,
          paddingTop: 3,
          marginBottom: 8,
        }}
      >
        <Card variant="contained" sx={{ borderRadius: 4 }}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ background: "#E4E4E5", padding: 3 }}
          >
            <Avatar 
                  sx={{ fontFamily: "Kanit", width: {xs:"18%", sm: "8%",md:"5%"}, height: 46,fontWeight: 'bold',bgcolor: '#fcf872',color:'#000000', 
                        }} 
                  aria-label="avatar" >
                  {props.friends.user.first_name[0]}
            </Avatar>
            <Typography sx={{ fontFamily: "Kanit", marginLeft: 3, fontSize: "18px" }}>
                {props.friends.user.first_name} {props.friends.user.last_name}
            </Typography>
          </Grid>
        </Card>
      </Box>
      </div>
      </Container>
  )
}

export default Friends_list