import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/css/Sidebar.css'

export default function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <Link style={linkStyle}>
        Categories 
      </Link>
      <Link to="/seeds" style={linkStyle}>
        Seeds
      </Link>
       
      <Link to="/plants" style={linkStyle}>
        Plants
      </Link>
      <Link to="/tools" style={linkStyle}>
        Tools
      </Link>
    </div>
  );
}

const sidebarStyle = {
  width: '200px',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  backgroundColor: '#333',
  padding: '20px',
  textDecoration:'none'
};

const linkStyle = {
  display: 'block',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  margin: '10px 0',
};
