import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Thanks for landing up here, I am <span className="purple">Tarun </span>
            from <span className="purple"> Dallas, USA.</span>
            <br />
          </p>
          <p className="home-about-body">
            I am currently advancing my academic journey with a <span className="purple">graduate degree in Computer Science</span> at the University of North Carolina at Charlotte.
            My professional experience includes roles at <span className="purple">HCA Healthcare</span> and <span className="purple">Intex Technologies</span> as a Software Engineer. These positions have provided me with significant practical experience and the chance to work alongside remarkable colleagues. Their diverse experiences and valuable feedback have been instrumental in my growth.
          </p>
          <br />
          <p className="home-about-body">
            My expertise in the field has been continually enriched by engaging in numerous hands-on projects and leveraging the insights and expertise of others in the software engineering field. This blend of academic and practical experiences has been pivotal in shaping my approach to solving complex problems and contributing effectively to the field.
          </p>

          <br />


          <br />
          Apart from coding, some other activities that I love to do!

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tarun Akasapu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
