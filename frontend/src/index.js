import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
