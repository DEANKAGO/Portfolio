import React from 'react';
import './about.css';
import { Container } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

export const About = () => {
  
  return (
    <Container className='aboutContainer'>
      <Navbar />
      <div className='mt-5'>
        <div className='aboutHeader mb-5 p-2'>
          <h2 className=''>Backend Services</h2>
        </div>
        <div className='explain'>
          <p>
            When it comes to backend software development, I'm all about
            delivering top-notch results. Here's how I approach it:
            <br />
            <br />
            First off, it's crucial to really understand what the project needs.
            That means diving deep into the requirements and making sure we're
            all on the same page.
            <br />
            <br /> Then comes choosing the right tech. I'm all about finding the
            perfect stack that balances scalability, performance, security, and
            maintainability. It's a bit of a balancing act, but it's worth it.
            <br />
            <br />
            When it comes to building, I'm all about scalability. I design
            architectures that can handle growth without breaking a sweat. That
            means thinking big from the start.
            <br />
            <br /> Of course, writing clean code is a must. I want my code to be
            easy to understand, maintain, and extend. It's all about following
            best practices and keeping things tidy.
            <br />
            <br /> Security is non-negotiable. I build systems with robust
            security measures baked in from the get-go. We're talking
            encryption, authentication, access control—the works. <br />
            <br />
            Testing is key. I'm all about running thorough tests to make sure
            everything works like a charm. That means unit tests, integration
            tests, you name it.
            <br />
            <br /> And even after deployment, my job isn't done. I keep an eye
            on things, monitoring performance, security, and anything else that
            might pop up.
            <br />
            <br /> But it doesn't stop there. I'm always learning and improving.
            The world of backend development is always changing, and I'm
            committed to staying on top of the latest trends and techniques.
            <br />
            <br /> So yeah, that's how I do backend software development. It's
            all about delivering solutions that are robust, scalable, secure,
            and maintainable.
          </p>
        </div>
      </div>
      <div className='line m-5'>
        <div className='sp'></div>
      </div>
      <Footer />
    </Container>
  );
};
