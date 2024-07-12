import React , { useState } from "react";
import { makeStyles } from "@mui/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QuizIcon from "@mui/icons-material/Quiz";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { Box, grid, spacing } from "@mui/system";
import { createTheme } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import AssignmentIcon from '@mui/icons-material/Assignment';
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Addchoice from './addchoice';
import Addproblem from './addproblem';


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

function Makequiz_form(props) {

    const classes = useStyles()

    const theme = createTheme()

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [openslide, setOpenslide] = useState(false)

    const [opensnackbar, setOpensnackbar] = useState(false);

    const handleClick = () => {
      setOpensnackbar(true);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
});

      setOpensnackbar(false);
    };

  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          width: {xs: "75%", sm:"30%", md:"15%"},
          height: "auto",
          alignItems: "center",
          bgcolor: "#008037",
          color: "white",
          display: "flex",
          paddingleft: theme.spacing(3),
          marginBottom: theme.spacing(3),
          marginLeft: { xs: theme.spacing(2), md: theme.spacing(5) },
          marginTop: { xs: theme.spacing(2) },
          borderRadius: 3,
        }}
      >
        <HistoryEduIcon sx={{ paddingLeft: theme.spacing(2), fontSize: 35 }} />
        <Typography
          sx={{
            fontFamily: "Kanit",
            display: "flex",
            fontWeight: 500,
            fontSize: 18,
            padding: theme.spacing(2),
            paddingLeft: theme.spacing(1),
          }}
        >
          สร้างแบบฝึกหัด
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1, 
            width: "90%",
            height: "auto",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: 2,
          },
        }}
      >
        <Paper elevation={3} >
          <Box
            component="h2"
            sx={{
              fontFamily: "Kanit",
              paddingLeft: { xs: theme.spacing(2), md: theme.spacing(10) },
            }}
          >
            สร้างแบบฝึกหัด
          </Box>
          <Grid direction="row" spacing={2}>
            <Grid item sx={{ textAlign: "center", marginBottom: theme.spacing(3),}}>
              <TextField
                inputProps={{style: {fontFamily: "Kanit"}}} 
                InputLabelProps={{style: {fontFamily: "Kanit"}}}
                label="หัวข้อแบบฝึกหัด"
                placeholder="หัวข้อแบบฝึกหัด"
                sx={{ width: "85%" }}
                multiline
                color="success"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
  
        <Box> 
            <Addproblem/>
        </Box>
        <Grid item sx={{ textAlign: "center" }}>
          <Button Button startIcon = {<AssignmentIcon />}
                    variant="outlined"
                    href="/quizmade"
                    sx={{
                      fontFamily: "Kanit",
                      fontSize: 18,
                      width: '40%',
                      height: 'auto',
                      borderRadius: 3,
                      bgcolor: "#212121",
                      color: "#000000",
                      marginRight: theme.spacing(2),
                      marginBottom: theme.spacing(5),
                      marginTop: theme.spacing(3),
                      background: '#fff200',
                    }}
                  >
                  แบบฝึกหัด
            </Button>
            <Button startIcon = {<NoteAddIcon />} variant="outlined" onClick={handleClick}
                      sx={{
                        fontFamily: "Kanit",
                        fontSize: 18,
                        width: '40%',
                        height: 'auto',
                        borderRadius: 3,
                        bgcolor: "#212121",
                        color: "#000000",
                        marginBottom: theme.spacing(5),
                        marginTop: theme.spacing(3),
                        background: '#fff200',
                      }}
                    >
                    สร้างแบบฝึกหัด
              </Button>
              <Snackbar 
                open={opensnackbar} 
                autoHideDuration={2000} 
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="success"  >
                  สร้างแบบฝึกหัดเรียบร้อยแล้ว
                </Alert>
              </Snackbar>
        </Grid>
        </Box>
  );
}

export default Makequiz_form