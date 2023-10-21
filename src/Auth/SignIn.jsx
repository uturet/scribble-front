import React, { useState } from 'react'
import { Link } from "react-router-dom"


function SignIn() {
  const [user, setUser] = useState(
    {
      id: 1, 
      username: "pikachu123",
      drawings: 17,
      birth: 1697801928864
    }
  );
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className='container-parent'>
        <Link to="/">
          <img className='landing sign-landing' src='/landing.png'/>
        </Link>
        <div className='sign-box'>

          <form action="signin.php" method="post">
              <label for="username">Username:</label>
              <input placeholder="Username" type="text" id="username" name="username" required/>
              
              <label for="password">Password:</label>
              <input placeholder="Password" type="password" id="password" name="password" required/>
              
              <input type="submit" className="circle-button" value="Sign In"/>
          </form>

          <Link to="/sign-up">
            <p className='fool'>Do you need an account?</p>
          </Link>

        </div>
      </div>
    </>
  )
}

export default SignIn
