import React from 'react'
import '../Styles/main.css'
import Navbar from '../Components/Navbar'

export default function Myroutines() {
  return (
    <>
    <section>
        <div className='container'>
            <div className='dashboard'>
                <div className='header_part'>
                    <div className='head-right'>
                        <h1>My Routines</h1>
                    </div>
                    <div className='left-box'>
                        <button className='notifi'>
                        <img src='../assets/notifi.svg' alt='/'/>    
                        </button>
                        <div>
                        <button className='top_btns'>
                            <img src='../assets/playbtn.svg' alt='/'/>
                            <span>245</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className='container'>
        <div className='top-heading'>
                <h3>Ongoing</h3>
            </div>
            <div className='routain'>
                <div className='routain-card'>
                <img className='routain-img' src='../assets/medi.jpg' alt='/'/>
                    <div className='rt-box'>
                        <div className='rt-text'>
                            <h1>Summer Yoga</h1>
                            <p>20 - min Full Body</p>
                        </div>
                        <div className='rt-sm-txt'>
                            <div className='rt-sm-col'>
                                <span>Days Completed</span>
                                <h3><b>21</b>/30</h3>
                            </div>
                            <div className='rt-lg-txt'>
                                <span>Calories Burnt</span>
                                <h3><b>3</b>Kcal</h3>
                            </div>
                        </div>
                        <div className='processbar'>
                            <span>70%</span>
                        </div>
                        <div className='c-btn'>
                            <button className='btn-continue'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-main'>
                <div className='card-box'>
                <img src='../assets/img1.jpg' alt='/'/>
                <div className='text-box'>
                <h5>Total Arm</h5>
                <p>20 Min - Arms</p>
                <div className='processbar'>
                    <span>70%</span>
                    </div>
                </div>
              </div>
              <div>
                <button className='newRoutain'>
                <i className='bx bx-plus'/> Add New Routine</button>
              </div>
            </div>
        </div>
    </section>

    <section>
        <div className='container'>
        <div className='ongng'>
            <h3>Recommended for you</h3>
        </div>
        <div className='recmd-bx'>
            <div className='recmd-row'>
                <div className='recmdimg'>
                    <img src='../assets/gym1.jpg' alt="/"/>
                    <span>HIIT</span>
                </div>
                <div className='recmdimg'>
                    <img src='../assets/gym2.jpg' alt="/"/>
                    <span>Cardio</span>
                </div>
                <div className='recmdimg'>
                    <img src='../assets/gym3.jpg' alt="/"/>
                    <span>Strength</span>
                </div>
            </div>
        </div>
        </div>
    </section>

    <Navbar/>
  </>
  )
}