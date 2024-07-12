import { Avatar, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { useTheme , createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { ExitToApp, Person } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const useStyles = makeStyles(({theme = createTheme()}) => ({
    menuSliderContainer: {
        width: 200,
        background: "#008037",
        height: "100%"
      },
      listItem: {
        color: "white"
      },

}) )


function Left_slidebar_st(props) {

    const theme = createTheme()

    const classes = useStyles()

    return(
        <Box className={classes.menuSliderContainer} component="div">
        <Avatar
        sx={{width: 75, height: 75, backgroundColor: 'success.main', 
              marginLeft: theme.spacing(8), 
              marginTop: theme.spacing(3) , 
              marginBottom: theme.spacing(2)}} 
          >
            <img 
              src="https://www.img.in.th/images/5c82f85a69a47c74cf09dedd00fd4890.png" 
              alt="TreeCherLOGO.png"  
              border="0"
              width="75"
              />
        </Avatar>
        <Typography component="h2" variant="h5" color="white" 
                    sx={{ fontFamily: "Kanit", fontWeight: 500, paddingLeft: theme.spacing(6.5), paddingBottom: theme.spacing(1) }}>
          TreeCher
        </Typography>
        <List>
            <ListItem button component="a" href="/home_st">
                <ListItemIcon sx={{ color: 'white'}}>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary='หน้าหลัก' sx={{ fontFamily: "Kanit", color: 'white'}}/>
            </ListItem>
            <ListItem button component="a" href="/profile">
                <ListItemIcon sx={{ fontFamily: "Kanit", color: 'white'}}>
                    <Person />
                </ListItemIcon>
                <ListItemText primary='โปรไฟล์' sx={{ fontFamily: "Kanit", color: 'white'}}/>
            </ListItem>
            <ListItem button onClick={props.openpopup}>
                <ListItemIcon sx={{ color: 'white'}}>
                    <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary='เพิ่มห้องเรียน' sx={{ fontFamily: "Kanit", color: 'white'}}/>
            </ListItem>
            <ListItem button component="a" href="/login">
                <ListItemIcon sx={{ color: 'white'}}>
                    <ExitToApp />
                </ListItemIcon>
                <ListItemText primary='ออกจากระบบ' sx={{ fontFamily: "Kanit", color: 'white'}}/>
            </ListItem>
        </List>
      </Box>
    )

}

export default Left_slidebar_st