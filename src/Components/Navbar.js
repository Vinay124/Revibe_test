import React from 'react'
import '../Styles/main.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav class="nav">
  <Link to="/" class="nav__link">
    <i className="bx bx-home"></i>
    <span class="nav__text">Home</span>
  </Link>
  <Link to="/" class="nav__link nav__link--active">
  <i className='bx bx-search-alt' ></i>
    <span class="nav__text">Discover</span>
  </Link>
  <Link to="#" class="nav__link">
  <i className='bx bxs-group'></i>
    <span class="nav__text">Spaces</span>
  </Link>
  <Link to="#" class="nav__link">
  <i className='bx bx-chat'></i>
    <span class="nav__text">Consult</span>
  </Link>
  <Link to="/my_routines" class="nav__link">
  <i className='bx bx-dumbbell'></i>
    <span class="nav__text">Routines</span>
  </Link>
</nav>  
  </>
  )
}
