import React from 'react';
import './services.css';
import { Container } from 'react-bootstrap';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import Backend from '../../images/backend.jpg';
import Frontend from '../../images/front.jpg';
import Mobile from '../../images/mobile.jpg';
import Web from '../../images/web.jpg';

export const Services = () => {
  return (
    <Container className='serviceContainer'>
      <div className='mt-5'>
        <div className='servicesHeader mb-5 p-2'>
          <h2 className=''>My Services</h2>
        </div>
        <Row md={4} className='serviceRow'>
          <Col className='columnCard equal-height'>
            <Card style={{ width: '18rem' }} className='content'>
              <div className='cardContainer'>
                <Image
                  src={Backend}
                  className='img'
                  roundedCircle
                  alt='backend logo'
                />
              </div>
              <Card.Body className='cardBody'>
                <Card.Title className='cardtitle'>Backend Engineer</Card.Title>
                <Card.Text>
                  <ul className='languages'>
                    <li>Python</li>
                    <li>NodeJs</li>
                    <li>TypeScript</li>
                    <li>Django</li>
                    <li>Flask</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-white'>
                <Button variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col className='columnCard equal-height'>
            <Card style={{ width: '18rem' }} className='content'>
              <div className='cardContainer'>
                <Image
                  src={Frontend}
                  className='img'
                  roundedCircle
                  alt='backend logo'
                />
              </div>{' '}
              <Card.Body className='cardBody'>
                <Card.Title className='cardtitle'>Web Developer</Card.Title>
                <Card.Text>
                  <ul className='languages'>
                    <li>ReactJs</li>
                    <li>TypeScript</li>
                    <li>Html & Css</li>
                    <li>Tailwind css</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-white'>
                <Button variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col className='columnCard equal-height'>
            <Card style={{ width: '18rem' }} className='content'>
              <div className='cardContainer'>
                <Image
                  src={Mobile}
                  className='img'
                  roundedCircle
                  alt='backend logo'
                />
              </div>{' '}
              <Card.Body className='cardBody'>
                <Card.Title className='cardtitle'>Mobile Developer</Card.Title>
                <Card.Text>
                  <ul className='languages'>
                    <li>React Native</li>
                    <li>iOS</li>
                    <li>Android</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-white'>
                <Button variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col className='columnCard equal-height'>
            <Card style={{ width: '18rem' }} className='content'>
              <div className='cardContainer'>
                <Image
                  src={Web}
                  className='img'
                  roundedCircle
                  alt='backend logo'
                />
              </div>{' '}
              <Card.Body className='cardBody'>
                <Card.Title className='cardtitle'>Web Design</Card.Title>
                <Card.Text>
                  <ul className='languages'>
                    <li>Figma</li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className='bg-white'>
                <Button variant='primary'>Learn More</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
