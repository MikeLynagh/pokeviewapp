import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./Login.css"

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
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username, 
            password
        })
        setToken(token)
    }


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
        <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" 
                onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button class="btn mt-3" type="submit">Submit</button>
        </div>
        <div>
          <p>Type in Username: admin</p>
          <p>Type in Password: admin</p>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}