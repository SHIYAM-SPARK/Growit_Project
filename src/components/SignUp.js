import React, { useState } from 'react';
import '../assests/css/SignUp.css';
import Login from './Login';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (!formData.firstName.trim()) {
      isValid = false;
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      isValid = false;
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });

        alert('Registration successful!');
      } catch (error) {
        console.error('Registration failed:', error);
        setErrors({ general: 'Registration failed. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='signform'>
    <div className="signup-container">
      <h2>Sign Up for Growit</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label className="signup-label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.firstName && <span className="signup-error">{errors.firstName}</span>}
        </label>
        <br />
        <label className="signup-label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.lastName && <span className="signup-error">{errors.lastName}</span>}
        </label>
        <br />
        <label className="signup-label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.email && <span className="signup-error">{errors.email}</span>}
        </label>
        <br />
        <label className="signup-label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.password && <span className="signup-error">{errors.password}</span>}
        </label>
        <br />
        <label className="signup-label">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
          />
          {errors.confirmPassword && (
            <span className="signup-error">{errors.confirmPassword}</span>
          )}
        </label>
        <br />
        {errors.general && <p className="signup-error">{errors.general}</p>}
          <Link to='/Login'>
        <button type="submit" disabled={isLoading} className="signup-button">
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
