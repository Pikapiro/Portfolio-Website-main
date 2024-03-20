import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">Who</span> am i ?
            </h1>
            <div data-aos="fade-up">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col>
        </Row>
        <h1 data-aos="fade-right">
          <span className="primary-header">Skill set</span> I Work With
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

        <Github />
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default About;
