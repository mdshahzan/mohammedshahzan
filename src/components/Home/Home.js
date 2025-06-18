import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  homeLogo from "../../Assets/Projects/profile.jpg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      {/* <Container fluid className="home-section" id="home"> */}
        {/* <Particle /> */}
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
                I'M
                <strong className="main-name"> Mohammed Shahzan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            

        
 <Col md={5} style={{ paddingBottom: 20 }}>
 <div className="profile-img-wrapper">
  <img src={homeLogo} alt="profile" className="profile-img" />
</div>

</Col>




          </Row>
        </Container>
      {/* </Container> */}
    </section>
  );
}

export default Home;
