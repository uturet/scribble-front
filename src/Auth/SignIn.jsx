import React, { useState } from 'react'
import { Link } from "react-router-dom"


function SignIn({onLogin, message}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className='container-parent'>
        <Link to="/">
          <img className='landing sign-landing' src='/landing.png' alt=''/>
        </Link>
        <div className='sign-box'>

          <form action="signin.php" method="post">
              <label for="username">Username:</label>
              <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" type="text" id="username" name="username" required/>
              
              <label for="password">Password:</label>
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" type="password" id="password" name="password" required/>
              
              <input 
              onClick={(e) => {
                onLogin(username, password)
                e.preventDefault()
              }}
              type="submit" className="circle-button" value="Sign In"/>
          </form>

          <Link to="/sign-up">
            <p className='fool'>Do you need an account?</p>
          </Link>
          <p>{message}</p>

        </div>
      </div>
    </>
  )
}

export default SignIn
