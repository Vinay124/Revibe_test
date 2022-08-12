import React from 'react'
import '../Styles/main.css'
import Navbar from '../Components/Navbar'

export default function Dashboard() {
  return (
    <>
    <section>
        <div className='container'>
            <div className='dashboard'>
                <div className='header_part'>
                    <div className='head-right'>
                        <h3>Hi,</h3>
                        <h1>Pranav</h1>
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

    <section className='calender-main'>
        <div className='container'>
            <div className='calender-col'>
                <div className='calender-row'>
                    <div className='cal-xls'>
                        <span>29</span>
                        <p>SUN</p>
                    </div>
                    <div className='cal-xls cal-active'>
                        <span>30</span>
                        <p>MON</p>
                    </div>
                    <div className='cal-xls'>
                        <span>31</span>
                        <p>TUE</p>
                    </div>
                    <div className='cal-xls'>
                        <span>01</span>
                        <p>WED</p>
                    </div>
                    <div className='cal-xls'>
                        <span>02</span>
                        <p>THU</p>
                    </div>
                    <div className='cal-xls'>
                        <span>03</span>
                        <p>FRI</p>
                    </div>
                    <div className='cal-xls'>
                        <span>04</span>
                        <p>SAT</p>
                    </div>
                </div>
            </div>
            <div className='headding'>
                <h3>Today</h3>
                <a href='/'>View All</a>
            </div>
            <div className='card-main'>
                <div className='card-box'>
                <img src='../assets/img1.jpg' alt='/'/>
                <div className='text-box'>
                <h5>Strength Training</h5>
                <p>7 day Challenge</p>
                </div>
              </div>
            </div>
            <div className='card-main'>
                <div className='card-box'>
                <img src='../assets/img2.jpg' alt='/'/>
                <div className='text-box'>
                <h5>Strength Training</h5>
                <p>7 day Challenge</p>
                </div>
              </div>
            </div>
            <div className='card-main'>
                <div className='card-box'>
                <img src='../assets/img3.jpg' alt='/'/>
                <div className='text-box'>
                <h5>Strength Training</h5>
                <p>7 day Challenge</p>
                </div>
              </div>
            </div>
        </div>
    </section>

    <section>
      <div className='container'>
        <div className='goal-section'>
        <div className='goal-heading'>
              <h3>Goals</h3>
              <a href='/'>View All</a>
            </div>
            <div className='goals'>
                <div className='goals-card'>
                    <div className='goals-icon goals-3'>
                    <i class='bx bx-droplet'></i>
                    </div>
                    <div className='goals-name'>
                        <h1>5/6</h1>
                    </div>
                    <div>
                        <p className='goals-text'>Glass of <b>Water</b></p>
                    </div>
                </div>
                <div className='goals-card'>
                    <div className='goals-icon'>
                    <i class='bx bxs-hot' ></i>
                    </div>
                    <div className='goals-name'>
                        <h1>150/300</h1>
                    </div>
                    <div>
                        <p className='goals-text'><b>Calories</b> burned </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <Navbar/>
  </>
  )
}
