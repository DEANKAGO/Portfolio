import React from 'react';
import './navbar.css';
import Logo from '../../images/logo.jpg';

export const Navbar = () => {
  return (
    <nav>
      <div className=''>
        <img className='logo' src={Logo} />
      </div>
      <div className='menuContainer'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
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
