import React, { useState } from 'react';
import '../assests/css/Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link} from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">Growit!</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/home"><FaHome /> Home</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/SignUp"><FaUser />SignUp</Link></li>
      </ul>
    </nav>
      
    <div className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name" className="contact-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <label htmlFor="email" className="contact-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />

        <label htmlFor="message" className="contact-label">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        ></textarea>
        <br/>
        <br/>
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
