import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import currencyPal from "../../Assets/Projects/currencyPal.png";
import swiggy from "../../Assets/Projects/swiggy.png";
import movieSearch from "../../Assets/Projects/movieSearch.jpg";
import gymfit from "../../Assets/Projects/gymfit.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={movieSearch}
              isBlog={false}
              title="Movie Search Engine"
              description = "The Movie Search Engine is a responsive web application built using React.js that allows users to search for movies and TV shows, view detailed information including trailers, cast, and ratings, and explore popular trending titles. The app uses The Movie Database (TMDB) API to fetch real-time data and display dynamic content with a Netflix-inspired user interface."
              ghLink="https://github.com/mdshahzan"
              demoLink="https://mdshahzan.github.io/MovieSearch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="Swiggy Clone"
              description="Swiggy clone is a replica of swiggy website which is a food delivering app. The data is taken from the live swiggy site. Just like a regular food delivery app this app also provides the listing of restaurants, Search food functionality, Search restaurant functionality, add to card which is done by redux.This is fully made by using React js."
              ghLink="https://github.com/mdshahzan/Swiggy-Clone"
              demoLink="https://swiggyclone-navy.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymfit}
              isBlog={false}
              title="Gym Fitness and Exercises"
              description="Extracted the data from an external api to display the Gym Exercises. Along with that search functionality is also implemented. It also displays the list of exercises by using pagination. Along with react, mui material which is a react library is also used which provides a comprehensive suite of pre-built customised UI components."
              ghLink="https://github.com/mdshahzan/gymfit"
             demoLink = "https://gymfit-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyPal}
              isBlog={false}
              title="Currency Pal -  Your Travel buddy"
              description="Currency Pal is made using MERN stack it requires authorization and makes sure that the user can only access if the user exists. It majorly consists of 3 components build on react. The main idea behind this is to provide a travel budget plan to the tourists along with currency conversion and travel Destination places."
              ghLink="https://github.com/mdshahzan/currencyPall"  
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
