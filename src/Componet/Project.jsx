import { RxDividerHorizontal } from "react-icons/rx";
import "../Style/Project.css";
import ProjectTamplet from "../Componet/ProjectTamplet";

// Img And Links Of Card

import project1Img from "../img/codewithgaurav-proj1.png";
import project2Img from "../img/Project-1.png";
import project3Img from "../img/twitter-clone.webp";
// import project4Img from "../img/me-5.jpeg";

const card1 = "https://codewithgaurav.netlify.app/";
const card2 = "https://gaurav-sunthwal.vercel.app/";
// const card3 = "https://codewithgaurav.netlify.app/";
// const card4 = "https://codewithgaurav.netlify.app/"

function Project() {
  return (
    <>
      <main className="projectSec">
        <div className="project">
          <div className="topText">
            <RxDividerHorizontal
              className="line"
              style={{ color: "#01d293" }}
            />
            <div className="text">
              <h2>Projects</h2>
            </div>
          </div>
          <h2>Checkout My Interactive Courses</h2>
        </div>
      </main>
      <div className="cardSec">
        <div className="allCard">
          <ProjectTamplet
            imgName={project2Img}
            link={card2}
            tital="Gaurav Sunthwal Potfolio"
            discraption="My Portfolio Website: A digital canvas of my skills, projects, and creative journey."
            tags={["HTML", "CSS", "ReactJS"]}
          ></ProjectTamplet>
          <ProjectTamplet
            imgName={project1Img}
            link={card1}
            tital="CodeWithGaurav Website By Gaurav Sunthwal"
            discraption="CodeWithGaurav:My e-learning platform creation journey, where I empower learners to master coding."
            tags={["HTML", "CSS", "JS"]}
          ></ProjectTamplet>
        </div>
      </div>
    </>
  );
}

export default Project;
