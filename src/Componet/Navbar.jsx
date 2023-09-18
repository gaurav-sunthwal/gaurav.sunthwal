// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../Style/Navbar.css";

import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiAlignLeft } from "react-icons/bi";

export default function Navbar() {
  function manuOpen() {
    document.querySelector(".burgerManu").style = "display:block";
    document.querySelector(".close").style = "display:block";
    document.querySelector(".burger").style = "display:none";
  }
  function manuClose() {
    document.querySelector(".burgerManu").style = "display:none";
    document.querySelector(".close").style = "display:none";
    document.querySelector(".burger").style = "display:block";
  }
  return (
    <>
      <nav>
        <div className="logo">
          <h1>
            <span>G</span>aurav <span>S</span>unthwal
          </h1>
        </div>
        <main>
          <div className="manu">
            <HashLink to={"/#home"} className="links">
              Home
            </HashLink>
            <HashLink to={"/#Project"} className="links">
              Project
            </HashLink>
            <HashLink to={"/#MyGears"} className="links">
              My Gears
            </HashLink>
            <HashLink to={"/#Blogs"} className="links">
              Blogs
            </HashLink>
            {/* | */}
            <p>|</p>
            <a href="/" target="_blank" className="icon">
              <BsInstagram />
            </a>
            <a href="/" target="_blank" className="icon">
              <AiOutlineTwitter />
            </a>
            <a href="/" target="_blank" className="icon">
              <AiFillGithub />
            </a>
            <a href="/" target="_blank" className="icon">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="burger manuIcon" onClick={manuOpen}>
            <BiAlignLeft />
          </div>
          <div className="close manuIcon" onClick={manuClose}>
            <AiOutlineClose />
          </div>
        </main>
      </nav>
      <div className="burgerManu">
        <HashLink to={"/#home"} className="links">
          Home
        </HashLink>
        <HashLink to={"/#Project"} className="links">
          Project
        </HashLink>
        <HashLink to={"/#MyGears"} className="links">
          My Gears
        </HashLink>
        <HashLink to={"/#Blogs"} className="links">
          Blogs
        </HashLink>
        {/* | */}
        <hr />
        <a href="/" target="_blank" className="icon">
          <BsInstagram />
        </a>
        <a href="/" target="_blank" className="icon">
          <AiOutlineTwitter />
        </a>
        <a href="/" target="_blank" className="icon">
          <AiFillGithub />
        </a>
        <a href="/" target="_blank" className="icon">
          <AiFillLinkedin />
        </a>
      </div>
    </>
  );
}
