import React from 'react'
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from 'react-icons/fa';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import '../assests/css/Navbar.css'

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      
      <div className="logo">
        <Link to="/home" className='logo'>Growit!</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        <li><Link to="/" className='log'><FaUser /> Login</Link></li>
        <li><Link to="/" className='log'><RiLogoutBoxRFill />Logout</Link></li>
      </ul>
    </nav>
   
    </>
  )
}
