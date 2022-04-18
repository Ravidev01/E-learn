import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"
import Avatar from "@mui/material/Avatar";

// import img from "../../Assets/multi1.png"

const Header = () => {
  return (
    <header className='header'>
    <div>
      <Link className='links' to='/home'> eLearn
        {/* <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"></img> */}
      </Link>
    </div>

    <nav className='navbar'>
      <ul>
        <Link className='links' to='/home'>
          Home
        </Link>
        <Link className='links' to='allcourses'>
          All Courses
        </Link>
        <Link className='links' to='/'>
          Logout
        </Link>

      </ul>
      <Avatar className="avatarStyle"src= "H">H</Avatar>

    </nav>
  </header>
  )
}

export default Header