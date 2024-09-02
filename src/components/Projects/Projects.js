import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/Projects/Travel.png";
import leave from "../../Assets/Projects/leave.png";
import food from "../../Assets/Projects/food.jpg";

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
              imgPath={travel}
              isBlog={false}
              title="Travel Management System"
              description="A platform for booking, tracking, and managing travel services and expenses, with features like itinerary management and expense tracking. Ideal for organizations needing streamlined travel approval and management processes."
              ghLink="https://github.com/Akasaputarun/Travel-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery Application"
              description="An app that connects users with local restaurants, allowing them to order food and track deliveries in real time. It features secure payment options, menu browsing, and customer reviews."
              ghLink="https://github.com/Akasaputarun/Food-delivery-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leave}
              isBlog={false}
              title="Leave Management System"
              description="A system that automates faculty leave applications, approvals, and tracking, providing a clear overview of leave balances and generating reports for administrative use. Designed to simplify the leave management process in educational institutions."
              ghLink="https://github.com/Akasaputarun/Faculty-Leave-Management"
            />
          </Col>






        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
