import React from 'react';
import './about.css';
import { Container } from 'react-bootstrap';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { myServices } from '../../data/Data';

export const About = () => {
  const { id } = useParams();
  const service = myServices.find((service) => service.id === Number(id));

  return (
    <Container className='aboutContainer'>
      <Navbar />
      <div className='mt-5'>
        <div className='aboutHeader mb-3 p-2'>
          <h2 className=''>{service?.header}</h2>
        </div>
        <div className='explain'>{service?.desc}</div>
      </div>
      <div className='line m-5'>
        <div className='sp'></div>
      </div>
      <Footer />
    </Container>
  );
};
