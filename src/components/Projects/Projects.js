import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memories from "../../Assets/Projects/memories.png";
import stackoverflow from "../../Assets/Projects/stackoverflow.png";
import doubtsmasher from "../../Assets/Projects/doubtsmasher.png";
import woofy from "../../Assets/Projects/woofy.png";
import wheatstone from "../../Assets/Projects/wheatstone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some projects I built for learning 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
          <ProjectCard
              imgPath={stackoverflow}
              isBlog={false}
              title="StackOverflow Clone"
              description = "I constructed a replica of the renowned website StackOverflow as a full-stack application. This project encompassed crucial elements including authentication, CRUD functionality, and a responsive UI layout. Users could create profiles, ask questions, and provide assistance to their peers within this platform."
d             ghLink="https://github.com/lakshmanmulchandani/StackOverFlowCloneClient"
              demoLink="https://stackoverflowclonelakshman.netlify.app/"
            />
          </Col>



          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="My Memories"
              description = "For my first MERN stack project, I developed a personal social media app with basic CRUD features. It was designed to help people stay connected with friends and family, even when they were far apart. The app allowed users to share those small, meaningful moments that might not have had a place on larger social media platforms"
              ghLink="https://github.com/lakshmanmulchandani/my-memories-client"
              demoLink="https://laksh-memories.netlify.app/"
            />
          </Col>

      
          
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={woofy}
              isBlog={false}
              title="Woofy"
              description="Meet 'Woofy' - a cutting-edge IoT-based solution designed to cater to the needs of working mothers. This frontend model offers a glimpse of a website focused on ensuring the well-being of infants. With innovative technology, it empowers busy working women to remotely monitor and care for their little ones, providing peace of mind"
             ghLink="https://github.com/lakshmanmulchandani/woofy-frontend"
              demoLink="https://aditya-ray.github.io/woofy-frontend/"
            />
          </Col>
          
          
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={wheatstone}
              isBlog={false}
              title="Weatstone Bridge"
              description="Introducing the Wheatsone Bridge Simulator, a real-time web-based project crafted using HTML, CSS, and JavaScript. This innovative tool serves as a virtual alternative to traditional Wheatstone bridges in the laboratory, enabling students and researchers to simulate and study electrical circuits conveniently."
d             ghLink="https://github.com/lakshmanmulchandani/WheatStoneBridgeSimulator"

              demoLink="https://wheatstonebridge.netlify.app/"
            />
          </Col>
          

          


          {/* <Col md={4} className="project-card">
          <ProjectCard
              imgPath={doubtsmasher}
              isBlog={false}
              title="Doubt Smasher"
              description = "I constructed a replica of the renowned website StackOverflow as a full-stack application. This project encompassed crucial elements including authentication, CRUD functionality, and a responsive UI layout. Users could create profiles, ask questions, and provide assistance to their peers within this platform."
d             ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://stackoverflowclonelakshman.netlify.app/"
            />
          </Col> */}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
