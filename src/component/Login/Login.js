import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./Login.css"

// function loginUser is used to send data to a server to update 
//the login details of the user 

async function loginUser(details) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
      .then(data => data.json())
   }


export default function Login({ setToken }) {

  //
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    // handleSubmit is used to obtain text input from user

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(username !== "admin" || password !== "admin"){
              setError(true)
        }

        // a login token cannot be created unless the user enters 
        //admin for username and admin for password


        // while (username == "admin" && password == "admin"){

        if (username == "admin" && password == "admin" ){
          const token = await loginUser({
            username, 
            password
        })
        setToken(token)
      }
        // }
      }

       
    


    // code for login form

  return(
    <div className="wrapper">
      <div className="logo">
        <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="Pokemon Go logo png"></img>
      </div>
      <div class="text-center mt-4 name">
        Pokedex
      </div>

      <h1>Please Log In</h1>
      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input type="text" name="userName" id="userName" placeholder='Username'
          onChange={e => setUserName(e.target.value)} />
        </div>

        {/* validation code for username to enter "admin" and error message  */}
        {error && username !== "admin" ?<label>Username must be admin</label>: ""}
        
        <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" 
                onChange={e => setPassword(e.target.value)} />
        </div>
         {/* validation code for username to enter "password" and error message  */}

        {error && username !== "admin" ?<label>Password must be admin</label>: ""}
        
        <div>
          <button class="btn mt-3" type="submit">Login</button>
        </div>
        <div>
          <p>You must use the username: admin</p>
          <p>You must use the password: admin</p>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}