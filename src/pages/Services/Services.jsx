import React from 'react';
import './services.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { myServices } from '../../data/Data';
import { Link } from 'react-router-dom';

export const Services = ({ elementRef }) => {
  return (
    <Container ref={elementRef} className='serviceContainer'>
      <div className=''>
        <div className='servicesHeader'>
          <h2 className=''>My Services</h2>
        </div>
        <Row md={4} className='serviceRow'>
          {myServices.map((service) => (
            <Col className='servicecolumnCard equal-height'>
              <Card style={{ width: '18rem' }} className='serviceContent'>
                <div className='serviceCardContainer'>
                  <Image
                    src={service?.photo}
                    className='serviceImg'
                    roundedCircle
                    alt='backend logo'
                  />
                </div>
                <Card.Body className='serviceCardBody'>
                  <Card.Title className='serviceCardtitle'>{service?.name}</Card.Title>
                  <Card.Text>
                    <ul className='serviceLanguages'>
                      {service.languages.map((language) => (
                        <li>{language}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-white'>
                  <Link to={`/about/${service.id}`}>
                    <Button className='serviceCardButton' variant='primary'>
                      Learn More
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
