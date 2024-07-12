import React, { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile_st';
import Profile_th from './pages/profile_th';
import Home_teacher from './pages/home_teacher';
import MakeQuiz_th from './pages/makequiz';
import Classroom_Teacher from './pages/classroom_th';
import Classroom_Students from './pages/classroom_st';
import Friends from './pages/friends';
import Member_th from './pages/member_th';
import CardProfile from './pages/test_profile';
import Score_st from './pages/score_st';
import Score_th from './pages/score_th';
import Quizmade from './pages/quizmade';
import SignUp_Type from './pages/signup_type';
import SignUp_TH from './pages/signup_th';
import SignUp_ST from './pages/signup_st';
import Home_student from './pages/home_students';
import Login from './pages/login';
import Quiz from './pages/quiz';
import Appbar from './pages/Appbar';

function App() {

  const [openCheckpoint, setopenCheckpoint] = useState(false)

  const [transition, setTransition] = useState(undefined);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopenCheckpoint(false);
  };

  return (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Appbar />}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="profile_th" element={<Profile_th/>}/>
            <Route path="home_th" element={<Home_teacher/>}/>
            <Route path="home_st" element={<Home_student />}/>
            <Route path="quiz" element={<Quiz />}/>
            <Route path="quizth" element={<MakeQuiz_th />}/>
            <Route path="quizmade" element={<Quizmade />}/>
            <Route path="classroom_th" element={<Classroom_Teacher />}/>
            <Route path="classroom_st" element={<Classroom_Students />}/>
            <Route path="friends" element={<Friends />}/>
            <Route path="member_th" element={<Member_th/>}/>
            <Route path="testprofile" element={<CardProfile />}/>
            <Route path="score_st" element={<Score_st />}/>
            <Route path="score_th" element={<Score_th />}/>
        </Route>
        <Route exact path="/login" 
          element={<Login open={openCheckpoint} close={handleClose} transition={transition}/>}/>
        <Route exact path="/signup" element={<SignUp_Type/>}/>
        <Route exact path="/signup/student" 
                element={<SignUp_ST setcheckpoint={setopenCheckpoint} settransition={setTransition}/>} />
        <Route exact path="/signup/teacher" 
                element={<SignUp_TH setcheckpoint={setopenCheckpoint} settransition={setTransition}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


