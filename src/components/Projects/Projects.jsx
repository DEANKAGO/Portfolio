import React from 'react';
import './projects.css';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { projectsData } from '../../data/Data';

export const Projects = () => {
  return (
    <Container className='projectsContainer'>
      <Navbar />
      <div className='projectsContent' mt-5>
        <div className='projectsHeader'>
          <h2>Projects</h2>
        </div>
        <Row md={4}>
          {projectsData.map((item) => (
            <Col key={item.id} className='columnCard equal-height'>
              <Card style={{ width: '20rem' }} className='content'>
                <Card.Body className='projectsCardBody d-flex flex-column'>
                  <Card.Title className='projectsCardtitle'>
                    {item.name}
                  </Card.Title>
                  <Card.Text className='projectsCardtext'>
                    <p>{item.about}</p>
                  </Card.Text>
                  <div className='mt-auto'>
                    <Card.Text className='cardtextTech'>
                      <strong>Technologies Used:</strong> {item.technology}
                    </Card.Text>
                    <Card.Footer className='bg-white cardFooter'>
                      <a className='' href={item.link} target='blank'>
                        <Button variant='primary'>View Repository</Button>
                      </a>
                    </Card.Footer>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className='line m-5'>
        <div className='sp'></div>
      </div>
      <Footer />
    </Container>
  );
};
