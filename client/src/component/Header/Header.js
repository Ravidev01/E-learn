import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"
import Avatar from "@mui/material/Avatar";
import { useSelector } from 'react-redux';

// import img from "../../Assets/multi1.png"

const Header = () => {
  const count = useSelector(state=>(state.cart.course).length)

  const handleLogout = ()=>{
    localStorage.removeItem("Auth");
  }
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
        <Link className='links' to='/allcourses'>
          All Courses
        </Link>
        <Link className='links cart' to='/mycart'>
          My Cart <span style={{ fontSize : "15px" , background:"#ff0000", color:"#fff", padding: "0 3px", margin:"-3px -5px 0 0 ", borderRadius:"50%",verticalAlign: "top"}}>{count}</span>
        </Link>
        <Link className='links' onClick={handleLogout} to='/'>
          Logout
        </Link>

      </ul>
      <Avatar className="avatarStyle"src= "H">H</Avatar>

    </nav>
  </header>
  )
}

export default Header