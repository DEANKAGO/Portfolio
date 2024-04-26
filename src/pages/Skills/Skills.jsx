import React from 'react';
import './skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import { softSkillsData } from '../../data/Data';
import { skillsData } from '../../data/Data';

export const Skills = ({ elementRef }) => {
  return (
    <Container ref={elementRef} className='skillsContainer'>
      <div className='mt-5'>
        <div className='skillsHeader mb-5 p-2'>
          <h2 className=''>My Skills</h2>
        </div>
        <Row md={2} className='skillsRow'>
          <Col className='skillsColumn'>
            {softSkillsData.map((softSkills) => (
              <div className='skillsDesc'>
                <h5>{softSkills.header}</h5>
                <p>{softSkills.desc}</p>
              </div>
            ))}
          </Col>
          <Col className='skillsColumn'>
            {skillsData.map((skills) => (
              <div className='skillsDesc'>
                <h5>{skills.header}</h5>
                <p>{skills.desc}</p>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};
