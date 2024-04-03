import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assests/css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>Email: contact@growit.com</p>
        <p>Phone: +91 123456790</p>
      </div>
      <div className='offers'>
        <h3>Offers and Rewards</h3>
        <p>Plant Parents Rewards Club</p>
        <p>Growit Coupons</p>
      </div>
      <div className="social-section">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
}
