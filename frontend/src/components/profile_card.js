import React, { useState } from 'react'
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    custom_file_upload:{
        borderRadius: "50%",
        display: "inline-block",
        position: "relative",
        p: "6px",
        cursor: "pointer",
        background: "linear-gradient(270deg, #3fa1a9, #79f1a4)",
        mb: "25px" 
    },
    profile_img:{
        width: "auto",
        height: "100%"
    },
    text_input: {
        fontFamily: "Kanit",
        borderRadius: "15px",
        border: "1px solid #b7b7b7",
        p: "5px 5px 5px 10px",
        fontSize: "18px",
        transition: "0.2"
    },
    img_wrap: {
        position: "relative",
        width: "200px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "50%"
    },
    img_upload: {
        '&:before': {
            content: "\f093",
            fontSize: "90px",
            position: "absolute",
            pt: "80px",
            top: "50%",
            left: "50%",
            tranform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#63d3a6",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            opacity: 0,
            transition:".5s ease",
            backgroundColor: "#fff",
        },
        '&:hover:before' :{
            opacity: 1,
        }
    }
})

function Profile_card(props) {

    const classes = useStyles()

    const [selectedImage, setselectedImage] = useState("https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true")

    const photoUpload = (event) => {
        event.preventDefault()
        console.log(event.target.files[0])
        const reader = new FileReader()
        const file = event.target.files[0]
        reader.onloadend = () => {
            setselectedImage(reader.result)
            console.log(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const ImgUpload =({ onChange,src })=>
        <Box component="label" htmlFor="photo-upload" className={classes.custom_file_upload}>
          <Box component="div" className="img-wrap img-upload">
            <img className={classes.profile_img} for="photo-upload" src={src} />
          </Box>
          <input classname={classes.text_input}  id="photo-upload" type="file" onChange={onChange}/> 
        </Box>


  return (
    <Box component="div" 
        sx={{ height: "627px", p: "15px",  borderRadius: 25, background: "#fff", boxShadow: "15px 10px 25px 0px  #3fa1a9"}}>
        <Box component="form" sx={{ textAlign: "center"}} >
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Kanit", mt: 8, mb:3 }}>
                โปรไฟล์
            </Typography>
            <Grid container justifyContent="center" >
                    <ImgUpload src={selectedImage} onChange={photoUpload} />
            </Grid>
            <Typography variant='h6' sx={{ fontFamily: "Kanit",mb: 3, mt:3 }}>
                {props.user.first_name} {props.user.last_name}<br/>
                {props.user.email}
            </Typography>
        </Box>
    </Box>
  )
}

export default Profile_card