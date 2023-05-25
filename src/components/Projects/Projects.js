import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dobbies1 from "../../Assets/Projects/dobbies-1.png";
import dobbies from "../../Assets/Projects/dobbies.png";
import liveRecruit1 from "../../Assets/Projects/live-recruit-1.png";
import liveRecruit from "../../Assets/Projects/live-recruit.png";
import neighborschools from "../../Assets/Projects/neighborschools.png";
import neighborschools1 from "../../Assets/Projects/neighborschools-1.png";
import sooper1 from "../../Assets/Projects/sooper-1.png";
import sooper from "../../Assets/Projects/sooper.png";

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
              imgPath={liveRecruit}
              imgPath2={liveRecruit1}
              isBlog={false}
              title="Live-Recruit"
              description="Live Recruit is an innovative web application designed to streamline the hiring process. It offers a comprehensive suite of services, including hosting live hiring events and an intuitive dashboard for clients. This virtual hiring event platform simplifies recruitment, enabling clients to expedite the hiring process and find the perfect candidates efficiently."
              demoLink="https://app.live-recruit.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neighborschools}
              imgPath2={neighborschools1}
              isBlog={false}
              title="NeighborSchools"
              description="Neighborschools is a web application built on Next.js and powered by GraphQL, designed to connect parents with reliable daycare centers for their children and assist daycare centers in obtaining the necessary licenses to operate in the United States. At the same time, daycare centers can utilize the platform to streamline the licensing process by accessing essential resources, and receiving guidance from experienced professionals."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.neighborschools.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dobbies}
              imgPath2={dobbies1}
              isBlog={false}
              title="Dobbies"
              description="Dobbies goes beyond the ordinary garden center experience, aiming to enhance lives and foster connections between people, their communities, and the environment. With a captivating web portfolio built on React for the frontend and Node for the backend, Dobbies offers meticulously curated product ranges both in-store and online, along with top-notch services, delightful restaurants and cafes, and immersive experiences."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.dobbies.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sooper}
              imgPath2={sooper1}
              isBlog={false}
              title="Sooper App"
              description="Sooper is an innovative ecommerce application designed to revolutionize online shopping, built with React for the frontend and powered by Node.js and Express for the backend. With a sleek and intuitive user interface, Sooper offers a seamless browsing and purchasing experience for customers. From fashion and electronics to home decor and more, the platform showcases a diverse range of products from trusted sellers. Sooper also incorporates secure payment gateways and efficient order processing, ensuring a smooth transaction process."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.sooper.com.br/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
