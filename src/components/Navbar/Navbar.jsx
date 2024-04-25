import React, { useRef } from 'react';
import './navbar.css';
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';

export const Navbar = ({ servicesRef, skillsRef, footerRef }) => {
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className=''>
        <Link to='/'>
          <img className='logo' src={Logo} />
        </Link>
      </div>
      <div className='menuContainer'>
        <ul>
          <li>
            <Link to='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a onClick={scrollToServices}>Services</a>
          </li>
          <li>
            <Link to='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <a onClick={scrollToSkills}>Skills</a>
          </li>
        </ul>
      </div>
      <div className='btnContainer'>
        <button className='btnContact'>Contact Me</button>
      </div>
    </nav>
  );
};
