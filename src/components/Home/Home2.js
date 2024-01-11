import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
              Web Developer
              </i>{" "}
              who loves solving problems and building Web and mobile application.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">technologies</i> and love to learn
              new things.
              <br />
              <br />I am more interested in building new
              <i>
                <i className="primary-header">Web & Mobile Technologies and Products.</i>
              </i>
              <br />
              <br />I always apply my experience in developing products with{" "}
              <i className="primary-header">the newest</i> and Modern 
              Librarys and Frameworks
              <br />
              <br />
              Im  always expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i>projects that I can add
              here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/pikapiro"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/danishapiro19969"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="facebook"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:danishapiro19969@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dani-shapiro-b6a797243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dani_shapiro2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
