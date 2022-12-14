import React from 'react'
import '../Styles/main.css'
import Navbar from '../Components/Navbar'

export default function Split_squats() {
  return (
    <>
    <section>
        <div className='container'>
            <div className='upnxt-dash'>
                <div className='up-nxtbtn'>
                    <a href='/'>Up Next</a>
                    <div className='upnxt-card'>
                        <div className='upnxt-cbx'>
                        <img src='../assets/img1.jpg' alt='/'/>
                    <div className='txt-bx'>
                    <h5>Strength Training</h5>
                    <p>7 day Challenge</p>
                </div>
              </div>
            </div>
                </div>
                <div className='upnxt-Nxt'>
                    <div className='nxt-txt'>
                        <h4>Good Job!</h4>
                        <p>Take a few seconds to rest.</p>
                    </div>
                </div>
                <div className='progressbar'></div>
                    <div className='splay-text-col'>
                        <div className='sm-text'>
                            <p>2 of 6</p>
                            <span>Split Squats - <b> X10</b></span>
                        </div>
                        <div className='sm-lg'>
                            <h1>00:19</h1>
                        </div>
                    </div>
                <div className='p-btns'>
                    <button className='btn-last'><i id="skip" className='bx bx-skip-previous'/></button>
                    <button className='btn-play'><i id="play" className='bx bx-pause'/></button>
                    <button className='btn-skip'><i id="next" className='bx bx-skip-next'/></button>
                </div>
            </div>  
        </div>
    </section>

    <Navbar/>
  </>
  )
}
