import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
//import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h1>IIT Madras</h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">MERN Stack Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <br />
                    <strong>Technology:</strong> React JS, Node.js, Express JS, MongoDB
                    <br />
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Coding Bootcamp: </strong> Currently I'm attending a <strong>Full Stack Developer Bootcamp</strong> in Guvi Zen Class, IIT Madras</li>
                      <li>At Guvi, the Industry Mentors have taught us everything required to become <strong>Full Stack Developer</strong>
                      </li>
                      <li>
                        I gained experience in developing both the front and back end of the web application and also MongoDB Database & Building API
                      </li>
                      <li><strong>Projects: </strong> I worked on Full Stack Projects including the clone of Popular Sites like Amazon and React Front End Projects
                      </li>
                      <li><strong>Performed</strong> CRUD operations on databases</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
