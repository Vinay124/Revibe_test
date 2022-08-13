import React from 'react'
import '../Styles/main.css'
import Navbar from '../Components/Navbar'

export default function Workoutstats() {
  return (
    <>
    <section>
        <div className='container'>
            <div className='hero'>
                <div className='hero-heading'>
                <h1>Amazing Job</h1>
                <p><b>Pranav!</b></p>
                <span>You Completed the <b>Strength Traninig </b> Routine</span>
                </div>
                <div className='day-bar'>
                    <div className='boxes active'><h1>1</h1></div>
                    <div className='boxes'><h1>2</h1></div>
                    <div className='boxes'><h1>3</h1></div>
                    <div className='boxes'><h1>4</h1></div>
                    <div className='boxes'><h1>5</h1></div>
                    <div className='boxes'><h1>6</h1></div>
                    <div className='boxes'><h1>7</h1></div>
                </div>
                <div className='bx-name'>
                        <span><b>Day 1 of 7</b> Completed</span>
                </div>
                <div className='cals_col'>
                    <div className='cals_row'>
                        <div className='cals_txtbx'>
                            <div className='txtsp'>
                                <div className='tx-bx'>
                                    <h1>3472</h1>
                                <span>Cals</span>
                                </div>
                                <p>Burnt Calories</p>
                            </div>
                            <div className='txtsp'>
                            <div className='tx-bx'>
                                    <h1>15</h1>
                                <span>Min</span>
                                </div>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div className='share-txt'>
                            <h3>Share this achievement with your friends!</h3>
                        <div className='share-bx'>
                            <div>
                                <h4><i className='bx bx-share-alt'/> Share To</h4>
                            </div>
                            <div>
                            <i  className='bx bxl-instagram'/>
                            <i id='icn'className='bx bxl-whatsapp'/>
                            <i className='bx bxl-facebook'/>
                            </div>
                        </div>
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

