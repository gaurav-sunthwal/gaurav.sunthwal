import "../Style/Home.css";
import myImg from "../img/me-1.jpeg";
import { RxDividerHorizontal } from "react-icons/rx";
import Project from "./Project";
import Terminal from "./Terminal";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <main className="homeSec">
        <div className="home">
          <div className="left">
            <div className="textContent">
              <div className="topText">
                <RxDividerHorizontal
                  className="line"
                  style={{ color: "#01d293" }}
                />
                <div className="text">
                  <h2>Hello</h2>
                </div>
              </div>
              <h1>I'm Gaurav Sunthwal</h1>
              <p>
                Passionate Web Developer | Crafting Digital Experiences |
                Problem Solver
              </p>
              <p>
                Passionate Computer Science student at MIT-World Peace
                University, adept in web development (ReactJS, HTML, CSS,
                Node.js). Eager to learn, innovate, and collaborate for
                impactful tech solutions. Let's connect and explore the exciting
                possibilities! 🚀
              </p>

              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="butA"
              >
                <button className="btn">Join Discord Server 🎉</button>
              </a>
            </div>
          </div>
          <div className="right">
            <img src={myImg} alt="" />
          </div>
        </div>
      </main>
      <Project/>
      <Terminal/>
      <Contact/>
    </>
  );
}

export default Home;
