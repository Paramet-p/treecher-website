import React , { useState } from "react";
import { Container, TextField } from '@mui/material';
import {makeStyles} from '@mui/styles'
import {Button, Paper, Grid} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme } from '@mui/material/styles';
import Addchoice from './addchoice';
import { Box, grid, spacing } from "@mui/system";
import SaveAltIcon from '@mui/icons-material/SaveAlt'
const useStyles = makeStyles(({ theme = createTheme() }) => ({
  container: {
    width: 'auto', 
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(3),
    }
  },
  card_classroom: {
    maxWidth: 345 ,
    marginBottom: theme.spacing(3)
  }
}));

function Addproblem() {
  const classes = useStyles();

  const theme = createTheme()

  const [inputFields, setInputFields] = useState([{ problem : "" }]);
  const handleChangeIput = (index,event) => {
      const values = [...inputFields];
      values[index][event.target.problem]=event.target.value;
      setInputFields(values);
  }
  const handleAddFields = () => {
      setInputFields([...inputFields,{problem: ''}])
  }
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index,1);
    setInputFields(values);
  }
  return (
    <Container>
        <form className={classes.root}>
        { inputFields.map((inputField, index) =>(
          <div key={index} sx={{ display: 'flex' }}>
            <Paper elevation={3} sx={{marginTop:theme.spacing(3), textAlign: "center", width: "100%", borderRadius: 3,}} >
            <TextField
             inputProps={{style: {fontFamily: "Kanit"}}} 
             InputLabelProps={{style: {fontFamily: "Kanit"}}}
             choice="โจทย์"
             color="success"
             label="โจทย์"
              sx={{ 
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(5),
                marginLeft:theme.spacing(3),
                width: "85%" }}
              value={inputFields.choice}
              onChange={event => handleChangeIput(index,event)}
            />

             <Grid item sx={{ textAlign: "center" }}>
              <img 
                src="https://www.img.in.th/images/0f9b48e6133c8f997195402b9ed492f9.png" 
                alt="0f9b48e6133c8f997195402b9ed492f9.png" 
                width="50%"
                border="2" 
                sx={{
                  marginTop: theme.spacing(7),
                  marginLeft:theme.spacing(8),
                  textAlign: "center"}}
                />
              </Grid>
            
            <Grid item sx={{ textAlign: "center" }}>
            <TextField
             inputProps={{style: {fontFamily: "Kanit"}}} 
             InputLabelProps={{style: {fontFamily: "Kanit"}}}
             choice="คำตอบ"
             color="success"
             label="คำตอบ"
              sx={{ 
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(2),
                width: "85%",
                textAlign: "center" }}
              value={inputField.choice}
              onChange={event => handleChangeIput(index,event)}
            />
            </Grid>
           
              <Addchoice/>

            <Grid item sx={{ textAlign: "center" }}>
            <Button startIcon = {<AddCircleIcon />}
            variant="contained"
            sx={{
              fontFamily: "Kanit",
              fontSize: 18,
              width: "80%",
              height: "85",
              borderRadius: 4,
              bgcolor: "#008037",
              marginBottom: theme.spacing(3),
              marginTop: theme.spacing(3),
              }}
            onClick={() => handleAddFields()}
            >
            
              เพิ่มโจทย์
              </Button>
              <Button startIcon = {<RemoveIcon />}
            variant="contained"
            sx={{
              fontFamily: "Kanit",
              fontSize: 18,
              width: "80%",
              height: "85",
              borderRadius: 4,
              bgcolor: "#008037",
              marginLeft: theme.spacing(1),
              marginBottom: theme.spacing(5),
              }}
              onClick={() => handleRemoveFields(index)}
            >
              ลบโจทย์
              </Button>
            </Grid>

            </Paper>
          </div>
        )) }
        </form>
        
    </Container>
  );
}

export default Addproblem;