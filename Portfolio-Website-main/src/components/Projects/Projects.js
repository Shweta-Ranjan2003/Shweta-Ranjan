import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real Time Chat App"
              description="A real-time chat application is an application that connects you to your family, friends and different users throughout globe. Real time chat application is an easy way to chat with others in a one to one conversation. In this project, I used a Laravel which is a popular PHP framework that is known for its elegant structure and also used a Vue.js."
              ghLink="https://github.com/KrishRathod/Real-time-Chat-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tours and Travels"
              description="Tours and Travel Website is a web based application made in Php, MySQL, HTML, CSS, and JavaScript. So with the help of this project user can apply for packages of tour reservation."
              ghLink="https://github.com/KrishRathod/Travels-and-Tour-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Adaptive Learning Platform"
              description="Build an adaptive learning platform, to leveraging gamification to engage users."
              ghLink="https://github.com/KrishRathod/Nbyula-Assignment"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Price Estimation of used Bikes"
              description="Designed and implemented a project that predicts the price of used bikes based on purchase price, kilometers driven
              and other parameters. Implemented and learnt about Python Tkinter, Data Handling with pandas, Files and exceptions, Arrays"
              ghLink="https://github.com/KrishRathod/Price-Estimation-of-Used-Bikes"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
