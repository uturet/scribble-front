import { createContext } from 'react';
import axios from 'axios'

export const AuthContext = createContext(null);
export const registerUserApi = (username, password, dispatch, setMessage) => {
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
    loginUserApi(username, password, dispatch, setMessage)
  }).catch((e) => {
    setMessage(e.message)
    dispatch({
      type: 'login',
      data: {
        id: null,
        username: null,
        image: null,
      }
    })
  })
}

export const loginUserApi = (username, password, dispatch, setMessage) => {
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
    localStorage.setItem("auth-id", response.data.id)
    localStorage.setItem("auth-username", response.data.username)
    localStorage.setItem("auth-image", response.data.image)
    localStorage.setItem("auth-token", response.data.token)
    window.location.href = window.location.origin;
  }).catch((e) => {
    setMessage(e.message)
    localStorage.setItem("auth-id", null)
    localStorage.setItem("auth-username", null)
    localStorage.setItem("auth-image", null)
    localStorage.setItem("auth-token", null)
    dispatch({
      type: 'login',
      data: {
        id: null,
        username: null,
        image: null,
      }
    })
  })
}

export const getUserDataApi = (token, dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:8000/user',
    headers: {
      'Authorization': 'Bearer '+ token,
    }
  })
  .then(function (response) {
    dispatch({
      type: 'login',
      data: response.data
    })
    localStorage.setItem("auth-id", response.data.id)
    localStorage.setItem("auth-username", response.data.username)
    localStorage.setItem("auth-image", response.data.image)
    localStorage.setItem("auth-token", response.data.token)
    window.location.href = window.location.origin;
  }).catch((e) => {
    localStorage.setItem("auth-id", null)
    localStorage.setItem("auth-username", null)
    localStorage.setItem("auth-image", null)
    localStorage.setItem("auth-token", null)
    dispatch({
      type: 'login',
      data: {
        id: null,
        username: null,
        image: null,
      }
    })
  })
}