import React, { useState } from "react";
import { RxDividerHorizontal } from "react-icons/rx";
import "../Style/Terminal.css";
// import React, { Component } from 'react';
// let terminalInput = document.querySelector

function Terminal() {
  const [output, setOutput] = useState("");

  const handleCommand = (command) => {
    let result = "";
    switch (command) {
      case "help" || "Help":
        result = "Available commands: aboutMe, signIn, signOut, help";
        break;
      case "aboutMe":
        result = `👋 Welcome to my LinkedIn profile! I'm Gaurav Naresh Sunthwal,


        🎓 Computer Science Student | Exploring the Boundaries of Tech | Web Developer | Continuous Learner
        
        Greetings! I'm Gaurav Naresh Sunthwal, and I'm embarking on an exciting journey as a Computer Science student at MIT-World Peace University, Pune. My passion for technology and my thirst for knowledge drive me as I dive into the dynamic world of computer science.
        
        🚀 Starting my B.Tech program in August 2023, I am eagerly anticipating the opportunities to learn, innovate, and collaborate that await me. With a strong foundation in various technologies and a hunger for new challenges, I'm ready to take on the next phase of my educational and professional growth.
        
        🛠️ Proficient in a variety of skills, I've dabbled in the art of Web Development, mastering tools like ReactJS, HTML, CSS, JavaScript, and Node.js. My coding journey has also taken me through the realms of Python and Java, just to name a few. These skills empower me to create robust and captivating digital solutions that cater to real-world needs.
        
        📚 Education is just the beginning for me. I'm a firm believer in the power of continuous learning. As technology evolves at a rapid pace, I am committed to staying at the forefront of industry trends, consistently expanding my skill set to remain adaptable and innovative.
        
        🤝 I am enthusiastic about connecting with fellow learners, professionals, and visionaries who share my passion for tech and growth. Whether you're interested in tech discussions, project collaborations, or simply networking, I'm eager to engage and contribute to meaningful conversations.
        
        Let's connect and explore the possibilities! Feel free to reach out to me at [your contact information].
        
        Here's to embracing the future of technology together! 🌟;`;
        break;
      case "signIn":
        result = "You have successfully signed in.";
        break;
      case "signOut":
        result = "You have successfully signed out.";
        break;
      default:
        result = 'Command not found. Type "help" for a list of commands.';
    }
    setOutput(result);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      const command = e.target.value.trim();
      handleCommand(command);
      e.target.value = "";
    }
  };

  return (
    <>
      <div className="wholeTerminalSec">
        <div className="topText">
          <RxDividerHorizontal className="line" style={{ color: "#01d293" }} />
          <div className="text">
            <h2>Terminal</h2>
          </div>
        </div>
        <main className="terminalSec">
          <div className="terminal">
            <div className="dots">
              <div className="dots1 dotsIcons"></div>
              <div className="dots2 dotsIcons"></div>
              <div className="dots3 dotsIcons"></div>
            </div>
            <div className="terminalText">
              <p>
                Welcome to my website! Get started by typing `help` command
                below
              </p>
              <div className="loopCont">
                <h3>
                  $ gaurav-sunthwal >> <span className="cursor"></span>
                </h3>
                  <input
                    className="terminalInput"                  
                    type="text"
                    // autoFocus
                    onKeyPress={handleInputKeyPress}
                  />
              </div>
              <p>{output}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Terminal;
