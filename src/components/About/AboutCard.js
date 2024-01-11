import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">dani shapiro</span> from Israel. I am a Full-stack Developer and a passionate programmer.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Watching man city wining ever week!
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Comic-Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Spending time with my family
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
