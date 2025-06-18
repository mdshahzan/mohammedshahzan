import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Mohammed Shahzan</span> from{" "}
            <span className="purple">India</span>.
            <br />
            I'm a passionate full-stack developer (MERN) focused on building fast, clean, and user-friendly web applications.
            <br />
            I enjoy learning new technologies and constantly improving my skills to solve real-world problems through code.
          </p>

          <p style={{ marginTop: "1rem" }}>
            "Consistency, growth, and creativity are what drive me — in life and in code."
          </p>
          <footer className="blockquote-footer">Shahzan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
