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
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I’m Shahzan — a self-taught full-stack developer who enjoys
              building things that live on the internet.
              <br />
              <br />
              I work mainly with
              <i>
                <b className="purple"> React.js, Node.js, MongoDB, and Express.js</b>
              </i>{" "}
              (aka the MERN stack), but I also like exploring new tech and tools that make life easier.
              <br />
              <br />
              I'm passionate about creating
              <i>
                <b className="purple"> clean, functional, and user-friendly web apps</b>
              </i>
              , and I love turning ideas into reality through code.
              <br />
              <br />
              Outside of tech, you’ll usually find me
              <b className="purple"> at the gym, on the football field, or behind a camera</b>{" "}
              capturing life’s best moments. I believe in growing a little every day — whether it’s learning something new or leveling up in life.
              <br />
              <br />
              Currently, I'm open to opportunities where I can
              <b className="purple"> learn, contribute, and grow </b>
              as a developer.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's <span className="purple">connect</span> and build something awesome together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mdshahzan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mdshahzan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mdshahzan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zennclicks"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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
