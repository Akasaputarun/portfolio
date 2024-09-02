import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/photo.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Tarun Akasapu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "320px", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "5px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <NavLink to="/about">
        <Button variant="primary">
          Click to know more about me!
        </Button>
      </NavLink>
      <Home2 />
    </section>
  );
}

export default Home;
