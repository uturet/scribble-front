import './App.css';
import React, {useReducer, useState} from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Feed from './Feed/Feed'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Post from './Post/Post';
import Profile from './Profile/Profile';
import {AuthContext, registerUserApi, loginUserApi, getUserDataApi} from './Auth/Api'
import Canvas from './Canvas/Canvas';

export const initialUser = {
  id: localStorage.getItem("auth-id"),
  username: localStorage.getItem("auth-username"),
  image: localStorage.getItem("auth-image"),
}

function userReducer(user, action) {
  switch (action.type) {
    case 'login': {
      user.id = action.data.id
      user.image = action.data.image
      user.username = action.data.username
      return user;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function App() {
  const [message, setMessage] = useState('')
  const [user, dispatch] = useReducer(
    userReducer,
    initialUser
  );

  function registerUser(username, password) {
    registerUserApi(username, password, dispatch, setMessage)
  }

  function loginUser(username, password) {
    loginUserApi(username, password, dispatch, setMessage)
  }

  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/sign-up" element={<SignUp onRegister={registerUser} message={message}/>} />
          <Route path="/sign-in" element={<SignIn onLogin={loginUser} message={message}/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/user/:id" element={<Profile/>} />
          <Route path="/post/create" element={<Canvas/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
