import React, { useState } from 'react';
import './navbar.css';
import Logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

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

  const [toggleMenu, setToggleMenu] = useState(false);

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
              <a href='#'>Home</a>
            </Link>
          </li>
          <li>
            <a href='#' onClick={scrollToServices}>
              Services
            </a>
          </li>

          <li>
            <a href='#' onClick={scrollToSkills}>
              Skills
            </a>
          </li>
          <li>
            <Link to='/projects'>
              <a href='#'>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='btnContainer'>
        <button className='btnContact' onClick={scrollToFooter}>
          Hire Me
        </button>
      </div>
      <div className='navbarMenu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='navbarMenuContainerToggle scale-up-center'>
            <div className='navbarMenuContainerLinks'>
              <ul>
                <li>
                  <Link to='/'>
                    <a href='#'>Home</a>
                  </Link>
                </li>
                <li>
                  <a href='#' onClick={scrollToServices}>
                    Services
                  </a>
                </li>

                <li>
                  <a href='#' onClick={scrollToSkills}>
                    Skills
                  </a>
                </li>
                <li>
                  <Link to='/projects'>
                    <a href='linkToProjects'>Projects</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='btnContainerMenu'>
              <button className='btnContactMenu' onClick={scrollToFooter}>
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
