import './App.css';
import React, {useReducer} from 'react';
import { BrowserRouter, Routes, Route, useParams,  } from "react-router-dom";
import Feed from './Feed/Feed'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Post from './Post/Post';
import Profile from './Profile/Profile';
import {AuthContext, registerUser} from './Auth/Api'

export const initialUser = {
  id: null,
  username: null,
  image: null,
  token: null
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
  const [user, dispatch] = useReducer(
    userReducer,
    initialUser
  );

  function loginUser(username, password) {

    registerUser(username, password, dispatch)
    
  }

  return (
    <AuthContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/sign-up" element={<SignUp onLogin={loginUser}/>} />
          <Route path="/sign-in" element={<SignIn onLogin={loginUser}/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/user/:id" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
