import React, { useState } from 'react'
import { Link, redirect } from "react-router-dom";


function SignUp({onLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className='container-parent'>
        <Link to="/">
          <img className='landing sign-landing' alt='' src='/landing.png'/>
        </Link>
        <div className='sign-box'>

          <form action="signin.php" method="post">
              <label for="username">Username:</label>
              <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" 
                type="text" 
                id="username" 
                name="username" 
                required/>
              
              <label for="password">Password:</label>
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                type="password" 
                id="password" 
                name="password" 
                required/>
              
              <input 
                onClick={(e) => {
                  e.preventDefault()
                  onLogin(username, password)
                  redirect('/')
                }}
                type="submit" 
                className="circle-button" 
                value="Sign Up"/>
          </form>

          <Link to="/sign-in">
          <p className='fool'>already have an account?</p>
          </Link>

        </div>
      </div>
    </>
  )
}

export default SignUp
