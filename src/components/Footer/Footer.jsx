import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = ({ elementRef }) => {
  return (
    <footer ref={elementRef} className='footerContainer'>
      <div className='footerItems'>
        <div className='footerRow'>
          <div className='footer'>
            <div className='footerContent'>
              <h3>Contact</h3>
            </div>
            <ul>
              <li>Email: martokhago@gmail.com</li>
              <li>Phone: +254745262475</li>
              <li>Github: https://github.com/DEANKAGO </li>
              <li>Linkedin: www.linkedin.com/in/martin-muchai-58109ba9/</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        <div className='bottom-bar'>
          <p>
            &copy; {new Date().getFullYear()} Fullstack Software Engineer
            Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};
