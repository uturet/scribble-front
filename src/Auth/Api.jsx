import { createContext } from 'react';
import axios from 'axios'


export const AuthContext = createContext(null);
export const registerUser = (username, password, dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:8000/user/register',
    data: {
      username: username, 
      password: password
    },
    headers: {
      headers: {
        'Content-Type': 'application/json'
      }}
    })
  .then(function (response) {
    // handle success
    // dispatch({
    //   type: 'login',
    //   data: data
    // })
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  })
}