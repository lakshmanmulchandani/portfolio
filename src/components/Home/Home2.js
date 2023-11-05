import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              🚀 A 4th-year NIT Raipur student and former <i className="purple">Sde intern</i> @GE Healthcare with a love for code and a dash of quirkiness.
              <br/>
              <br/> Fluent in classics like
              <i className="purple"> C++, Javascript, and Python </i>  with an array of data structures and algorithms, I'm on a wild ride in the MERN stack.
              <br />
              <br />
              Building <i className="purple">Web Technologies and Products</i>, crafting <i className="purple">ML</i> wonders, and diving into <i className="purple">Chatbot</i>  development are my passions.
              <br />
              <br />
              Aspiring to be more than just a web developer, I'm exploring the intricacies of <i className="purple">Sysetm design</i>  and solidifying core concepts such as <i className="purple">database design and operating systems</i>.
              <br />
              <br />
              🌟 Embracing "It's all his plan," I trust in destiny's role in our lives, reminding me to keep a positive attitude and believe that everything happens for a reason.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lakshmanmulchandani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lakshmanmulchandani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_lakshh__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          </Col>
        </Row>
        <Row>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
