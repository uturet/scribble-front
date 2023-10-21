import { createContext } from 'react';
import axios from 'axios'

export const AuthContext = createContext(null);
export const registerUserApi = (username, password, dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:8000/user/register',
    data: {
      username: username, 
      password: password
    },
    headers: {
        'Content-Type': 'application/json'
      }})
  .then(function (response) {
    loginUserApi(username, password, dispatch)
  }).catch((e) => {
    console.log(e)
  })
}

export const loginUserApi = (username, password, dispatch) => {
  axios.postForm(
    'http://localhost:8000/auth/login',
    {
      username: username, 
      password: password
    })
  .then(function (response) {
    dispatch({
      type: 'login',
      data: response.data
    })
    window.location.href = window.location.origin;
  }).catch((e) => {
    console.log(e)
  })
}