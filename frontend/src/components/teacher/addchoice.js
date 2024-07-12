import React , { useState } from "react";
import { Container, TextField } from '@mui/material';
import {makeStyles} from '@mui/styles'
import {Button, IconButton, Grid} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { createTheme } from '@mui/material/styles';

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

function Addchoice() {
  const classes = useStyles();

  const theme = createTheme()

  const [inputFields, setInputFields] = useState([{ choice : "" }]);
  const handleChangeIput = (index,event) => {
      const values = [...inputFields];
      values[index][event.target.choice]=event.target.value;
      setInputFields(values);
  }
  const handleAddFields = () => {
      setInputFields([...inputFields,{choice: ''}])
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
            <Grid item sx={{ textAlign: "center" }}>
            <TextField
             inputProps={{style: {fontFamily: "Kanit"}}} 
             InputLabelProps={{style: {fontFamily: "Kanit"}}}
             color="success"
             choice="choice"
             label="ตัวเลือก"
              sx={{ 
                // paddingTop: theme.spacing(3),
                // paddingLeft: theme.spacing(4),
                marginBottom: theme.spacing(2),
                width: "70%" }}
              value={inputFields.choice}
              onChange={event => handleChangeIput(index,event)}              
            />
            <IconButton sx={{ marginTop: theme.spacing(1)}}
                  onClick={() => handleRemoveFields(index)}>
                  <RemoveIcon/>
              </IconButton>
              <IconButton sx={{ marginTop: theme.spacing(1),}}
                  onClick={() => handleAddFields()}>
                  <AddCircleIcon/>
              </IconButton>
            </Grid>
              
          </div>
        )) }
        </form>
        
    </Container>
  );
}

export default Addchoice;