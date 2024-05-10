import React, { useState, useRef } from 'react';
import './home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Services } from '../Services/Services';
import { Skills } from '../Skills/Skills';
import { Footer } from '../../components/Footer/Footer';
import { Modal, Button } from 'react-bootstrap';

export const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className='container'>
      <Navbar
        skillsRef={skillsRef}
        servicesRef={servicesRef}
        footerRef={footerRef}
      />
      <div className='contentContainer'>
        <div className='homeContent'>
          <div className='text'>
            <h1 className='intro'>
              Welcome to my portfolio! <br />
              <span className='span'>I'm Martin Kago Muchai</span>
            </h1>
            <h3 className='intro'>A passionate software engineer</h3>
            <p className='contentP'>
              I specialize in full-stack development, mobile app development,
              frontend development and backend development. My goal is to
              leverage my technical expertise and problem-solving skills to
              deliver innovative solutions that meet and exceed client
              expectations.
            </p>
            <button className='btnContact' onClick={handleShow}>
              Let's Connect
            </button>
          </div>
          <div className='homeImage'>
            <div class='sky'>
              <div class='star'></div>
              <div class='planet'>
                <div class='satellite'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services elementRef={servicesRef} />
      <Skills elementRef={skillsRef} />
      <Footer elementRef={footerRef} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='modalHeader'>Let's Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='contactList'>
            <li>Email: martokhago@gmail.com</li>
            <li>Phone: +254745262475</li>
            <li>Github: github.com/DEANKAGO </li>
            <li>Linkedin: www.linkedin.com/in/martin-muchai-58109ba9/</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
