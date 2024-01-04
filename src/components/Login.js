import React, { useState } from 'react';
import '../assests/css/Login.css';
import { Link,useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Navbar from './Navbar';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return isValid;
  };

  const navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setFormData({
          email: '',
          password: '',
        });

          navigate('/home')
      } catch (error) {
        console.error('Login failed:', error);
        setErrors({ general: 'Invalid credentials. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
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
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        <li><Link to="/SignUp"><FaUser />SignUp</Link></li>
      </ul>
    </nav>
    <div className="login-container">
    <div >
      <h2>Login to Growit</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
          />
          {errors.email && <span className="login-error">{errors.email}</span>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
          />
          {errors.password && <span className="login-error">{errors.password}</span>}
        </label>
        <br />
        {errors.general && <p className="login-error">{errors.general}</p>}
        <button type="submit" disabled={isLoading} className="login-button">
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <br/>
        <div className='reg-class'>

        
      <h4>Don't have an Account?</h4>
      <Link to='/SignUp'>
      <h4 className='reg-btn'>Register</h4>
      </Link>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;
