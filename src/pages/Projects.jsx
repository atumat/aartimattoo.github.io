import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.png";
import hospitalpng from "../assets/projects/hospitalpng.png";




const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my projects...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Election Management System"
              description="Election Management System using Python MySQL connectivity to reduce the manual work of handling elections. Python is used in database applications. MySQL is one of the most popular databases. The project uses relational Database to store candidates, voters, number of votes and Election Commission Rules.The main objective of the Python Project on Election Management System is to manage the details of election, candidates, election commission rules, election Dates, Registration. It manages the information about Election, Votes, and Registration."
              ghLink="https://github.com/atumat/Election-Management-System"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Company Website"
              description="A Responsive Company Website using HTML5 and CSS3 A web page is a document which is commonly written in HTML and translated by a web browser. A web page can be identified by entering an URL. A Web page can be of the static or dynamic type. With the help of HTML only, we can create static web pages. Used HTML tags, tables, lists, links and images, forms to make static web pages Built a responsive web page using Responsive web design principles."
              ghLink="https://github.com/atumat/Companywebsite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospitalpng}
              isBlog={false}
              title="Hospital Management"
              description="About
              Hospital Management System using Object Oriented Programming in C++. Demonstrated Inheritance, Polymorphism, Abstraction & Data hiding OOP principles .Implemented Exception Handling and File Handline; used Virtual Base Class and Friend functions"
              ghLink="https://github.com/atumat/Hospital-Management"
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects