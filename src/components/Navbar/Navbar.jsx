import React from 'react';
import './navbar.css';
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
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
            <Link to='/services'>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link to='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </div>
      <div className='btnContainer'>
        <button className='btnContact'>Contact</button>
      </div>
    </nav>
  );
};
