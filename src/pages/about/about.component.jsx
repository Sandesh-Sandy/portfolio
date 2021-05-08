import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
//import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" 
                src={'https://i.postimg.cc/zf3Gxwpz/IMG-20181227090735-1.jpg'} 
                thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I'm <strong>&nbsp;Sandesh Kumar K S</strong>
                <br />An Enthusiastic Full Stack Developer. I have hands-on experience with MongoDB, Express.js, React.js, Node.js (MERN Stack).
                <br />
                <br />
                In 2019, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.
                <br />
                <br />I love learning about new technologies, passionate about building interactive websites and User Interface.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="https://drive.google.com/file/d/1zXhTuzWd2u_bGS6uPBkLZW2RIIRdrWxN/view?usp=sharing"
                     target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Sandesh-Sandy" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://linkedin.com/in/sandesh-kumar-k-s/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
