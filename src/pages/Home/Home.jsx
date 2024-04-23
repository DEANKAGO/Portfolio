import React from 'react';
import './home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import bgImage from '../../images/portfolio.jpg';
import { Services } from '../Services/Services';
import { Skills } from '../Skills/Skills';
export const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='content'>
        <div className='text'>
          <h1 className='intro'>
            Welcome to my portfolio! <br />
            <span className='span'>I'm Martin Kago Muchai</span>
          </h1>
          <h3 className='intro'>A passionate software engineer</h3>
          <p className='contentP'>
            I specialize in full-stack development, mobile app development,
            frontend development and backend development. My goal is to leverage
            my technical expertise and problem-solving skills to deliver
            innovative solutions that meet and exceed client expectations.
          </p>
          <button className='btnContact'>Lets Engage</button>
        </div>
        <div className='homeImage'>
          <img className='image' src={bgImage} />
        </div>
      </div>
      <Services />
      <Skills/>
    </div>
  );
};
