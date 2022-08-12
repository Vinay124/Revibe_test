import React from 'react'
import '../Styles/main.css'

export default function Register() {
  return (
    <>
    <section className='regpage'>
      <div className='container'>
        <div className='main-reg'>
          <div className='welcomeNote'>
             <h3>Hey!</h3>
             <h1>Welcome to <span className='logo'>Revibe</span></h1>
          </div>
            <div className='intro'>
            <p>Amazing to see your here! </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='btns'>
              <button className='btn-primary'>SignUp</button>
              <span className='signin'>Alredy have an Account? <a href='/'>SignIn</a></span>
            </div>
        </div>
      </div>
    </section>  
  </>
  )
}

