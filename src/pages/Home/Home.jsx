import React from 'react';
import './home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import bgImage from '../../images/portfolio.jpg';

export const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='content'>
        <div className='text'>
          <h1 className=''>Welcome to my portfolio! I'm Martin Kago Muchai</h1>
          <h1>A passionate software engineer</h1>
          <p className='contentP'>
            I specialize in full-stack development, mobile app development,
            frontend development and backend development. My goal is to leverage
            my technical expertise and problem-solving skills to deliver
            innovative solutions that meet and exceed client expectations.
          </p>
          <button className='btnContact'>Contact</button>
        </div>
      </div>
      <div className='homeImage'>
        <img className='image' src={bgImage} />
      </div>
    </div>
  );
};
