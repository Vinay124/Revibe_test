import React from 'react'
import '../Styles/main.css'
import Navbar from '../Components/Navbar'

export default function StrengthTraining() {
  return (
    <>
    <section>
    <div className='training-box'>
                <div className='tra-txt'>
                    <h1>Strength Training</h1>
                    <i className='bx bx-cog'></i>
                </div>
                <div className='submenus'>
                    <span>Day - 1 <b>Legs</b></span>
                    <p>15 Min</p>
                </div>
                <div>
                    <button className='btn-start'>Start  <i className='bx bx-chevron-right'></i></button>
                </div>
            </div>
        <div className='container'>  
        </div>
    </section>

    <section>
        <div className='container'>
        <div className='wrk-seq'>
             <h3>Workout Sequence</h3>
            </div>
            <div className='wrk-col'>
                <img src='./assets/img1.jpg' alt='/'/>
                    <div className='wrk-col-txt'>
                    <h1>Sumo Sequence</h1>
                    <span>X10</span>
                </div>
                <div className='wrk-icon'>
                <i id='baricon' class='bx bx-menu'></i>
                </div> 
            </div>
            <div className='wrk-col'>
                <img src='./assets/gym2.jpg' alt='/'/>
                    <div className='wrk-col-txt'>
                    <h1>Split Squarts Sequence</h1>
                    <span>X10</span>
                </div>
                <div className='wrk-icon'>
                <i id='baricon' class='bx bx-menu'></i>
                </div> 
            </div>
            <div className='wrk-col'>
                <img src='./assets/img1.jpg' alt='/'/>
                    <div className='wrk-col-txt'>
                    <h1>Single Leg Raises</h1>
                    <span>X20</span>
                </div>
                <div className='wrk-icon'>
                <i id='baricon' class='bx bx-menu'></i>
                </div> 
            </div>
            <div className='wrk-col'>
                <img src='./assets/gym3.jpg' alt='/'/>
                    <div className='wrk-col-txt'>
                    <h1>Plank Leg Lifts</h1>
                    <span>X10</span>
                </div>
                <div className='wrk-icon'>
                <i id='baricon' class='bx bx-menu'></i>
                </div> 
            </div>
            <div className='wrk-col'>
                <img src='./assets/img2.jpg' alt='/'/>
                    <div className='wrk-col-txt'>
                    <h1>Plank</h1>
                    <span>1 Min</span>
                </div>
                <div className='wrk-icon'>
                <i id='baricon' class='bx bx-menu'></i>
                </div> 
            </div>
            {/* <div className='wrk-col'>
                <img src='./assets/img1.jpg' alt='/'/>
                    <div className='wrk-col-txt'>
                    <h1>Leg Lift</h1>
                    <span>1 Min</span>
                </div>
                <div className='wrk-icon'>
                <i id='baricon' class='bx bx-menu'></i>
                </div> 
            </div> */}
        </div>
    </section>
    <Navbar/>
  </>
  )
}
