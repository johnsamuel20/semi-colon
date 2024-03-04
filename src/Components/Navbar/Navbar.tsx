import  { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/Logo.png"
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom'
function Navbar() {
  const [btn,setBtn] = useState(false)
  const handleClick = () => {
    setBtn(btn => !btn)
  }
  const toggleClassCheck = btn && 'mobile-menu'
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-pic" />
        </Link>
        <div className={`nav-links ${toggleClassCheck}`}>
          <ul className="nav-menu">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://www.facebook.com/elite.team.asu" target="_blank">About Us</a>
            </li>
            <li>
              <a href="https://www.facebook.com/elite.team.asu" target="_blank">Join Us</a>
            </li>
            <li>
              <a href="https://www.facebook.com/elite.team.asu" target="_blank">Contact</a>
            </li>
          </ul>
        </div>
        <Icon
          values="btn"
          icon="bx:grid-alt"
          className="bx bx-grid-alt menu-hamburger"
          onClick={handleClick}
        />
      </nav>
    </div>
  )
}

<img src={logo} alt="Logo" className="logo-pic" />;

export default Navbar
