import React, { Component } from "react";
import axios from axios;

export default class Login extends Component{
  render() {
  return (
    <>
    <section className='login'>
      <div className='container'>
        <div className='text-xxl'>
          <h1>Hello</h1>
          <h4>Welcome Back you've been missed!</h4>
        </div>
        <div className='form-box'>
          <form className='loginmain'>
            <div>
            <input className='email' id='email' type="email" placeholder="Enter Your Email"/>
            </div>
            <div>
            <input className='pass' id='email' type="password" placeholder="Enter Your Password"/>
            </div>
            <div>
              <p className='f-pass'>Recovery Password</p>
            </div>
              <div>
                <button className='btn-login'>Log in</button>
              </div>
            </form>
          <div className='login-container'>
            <p>Or continue with</p>
            <div className='loginbtns'>
            <button className='google'>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="/"/>
            </button>
            <button className='facebook'>
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt='/'/>
            </button>
          </div>
        </div>
          <div className='member'>
            <span>Not Member? <a href='/'>Register Now</a></span>
          </div>

        </div>
      </div>
    </section>
  </>
  )
  }
}