import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Portfolio from "../../Assets/Projects/Portfolio.png";
import calcApp from "../../Assets/Projects/calcApp.png";
import deliveryApp from "../../Assets/Projects/deliveryApp.png";
import smartHouse from "../../Assets/Projects/smart-house.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={deliveryApp}
              title="deliveryApp"
              description="This is a fully functional delivery app Flutter, dart,  in backend and fireBase as Database."
              ghLink="https://github.com/Pikapiro/food_delivery_app"
             
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/pikapiro/Portfolio-Website"
              demoLink="https:/www.danishapirodev.com"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={smartHouse}
              title="smart-house"
              description="A smart house Application  build with React, Node, Express, and MongoDB as the database."
              ghLink="https://github.com/Pikapiro/Smart-House"
            
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={calcApp}
              title="calcApp"
              description="An app An app  using Flutter, dart, It allows you to run simple math. "
              ghLink="https://github.com/Pikapiro/flutter_calculator_app"
          
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
