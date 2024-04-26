import React from 'react';
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

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className=''>
        <Link to='/'>
          <img className='logo' src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='menuContainer'>
        <ul>
          <li>
            <Link to='/'>
              <a href='home'>Home</a>
            </Link>
          </li>
          <li>
            <a href='services' onClick={scrollToServices}>
              Services
            </a>
          </li>
          <li>
            <Link to='/projects'>
              <a href='projects'>Projects</a>
            </Link>
          </li>
          <li>
            <a href='skills' onClick={scrollToSkills}>
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div className='btnContainer'>
        <button className='btnContact' onClick={scrollToFooter}>
          Contact Me
        </button>
      </div>
    </nav>
  );
};
