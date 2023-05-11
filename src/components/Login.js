import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <img className='login-logo' src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt="" />

        <div className="login-container">
          <h1>Sign In</h1>
          <form action="" className='form'>
            <h5>Name</h5>
            <input type="text" />
            <h5>Email</h5>
            <input type="email" />
            <h5>Password</h5>
            <input type="password" />
            <button className='btn1' type='submit'>Sign in</button>
          </form>
          <p>By Signing in you are agree with terms and conditions</p>
          <button className='btn2' type='submit'>Create your own account</button>
        </div>
        
        
    </div>
  )
}

export default Login