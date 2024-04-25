import React from 'react';
import './skills.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Skills = () => {
  return (
    <Container className='skillsContainer'>
      <div className='mt-5'>
        <div className='skillsHeader mb-5 p-2'>
          <h2 className=''>My Skills</h2>
        </div>
        <Row md={2} className='skillsRow'>
          <Col className='skillsColumn'>
            <div className='skillsDesc'>
              <h5>Problem-Solving and Troubleshooting:</h5>
              <p>
                I have the ability to identify and solve technical problems
                efficiently.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Communication and Collaboration:</h5>
              <p>
                I have strong communication skills and the ability to work
                effectively in a team environment.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Agile Methodologies:</h5>
              <p>
                I am familiar with Agile development methodologies such as Scrum
                or Kanban.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Testing:</h5>
              <p>
                Understanding of software testing principles and experience with
                testing frameworks.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Version Control:</h5>
              <p>
                I am proficient in using version control systems like Git for
                managing code repositories and collaborating with other
                developers.
              </p>
            </div>
          </Col>
          <Col className='skillsColumn'>
            <div className='skillsDesc'>
              <h5>RESTful APIs:</h5>
              <p>
                Ability to design and build RESTful APIs to facilitate
                communication between the front-end and back-end of web
                applications.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Responsive Design:</h5>
              <p>
                Ability to create websites and applications that work well on
                different devices and screen sizes.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Deployment Tools:</h5>
              <p>
                Knowledge of deployment tools such as Docker, Kubernetes, or
                Heroku for containerization and deploying applications to
                production environments.
              </p>
            </div>
            <div className='skillsDesc'>
              <h5>Database Management:</h5>
              <p>
                Familiarity with relational databases (e.g., MySQL, PostgreSQL)
                and NoSQL databases (e.g., MongoDB) and their query languages.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
