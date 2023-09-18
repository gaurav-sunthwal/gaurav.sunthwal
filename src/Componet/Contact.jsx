import { RxDividerHorizontal } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import "../Style/Contact.css";
import { useState } from "react";
function Contact() {
  const [formStatus, getformStatus] = useState({});

  const changeHandler = (event) => {
    getformStatus({ ...formStatus, [event.target.name]: event.target.value });
  };

  const submitHanlder = (event) => {
    event.prevenDefault()
    const config = {
      SecureToken: "39964656-f78d-4268-a009-c19fc85369bd",
      To: "codewithgaurav22005@gmail.com",
      From: formStatus.email,
      Subject: "This is the subject",
      Body: `${formStatus.name} send you a message`
    };
    if (window.Email) {
      window.Email.send(config).then(()=> {alert("Email sent successfully")});
    }
  };

  function sendEmail() {
    console.log("helo");
  }
  return (
    <>
      <div className="contact">
        <div className="connect">
          <h2>Connect with me</h2>
          <div className="textIcon">
            <FaLocationDot />
            <a href="/">Pune</a>
          </div>
          <div className="textIcon">
            <SiGmail />
            <a href="mailto:gauravsunthwal22005@gmail.com">
              gauravsunthwal22005@gmail.com
            </a>
          </div>
          <div className="textIcon">
            <BsLinkedin />
            <a href="https://www.linkedin.com/in/gaurav-sunthwal/">
              linkedin.com/gaurav-sunthwal
            </a>
          </div>
          <div className="textIcon">
            <BsGithub />
            <a href="https://github.com/gaurav-sunthwal">
              github.com/gaurav-sunthwal
            </a>
          </div>
          <div className="textIcon">
            <BsYoutube />
            <a href="https://www.youtube.com/channel/UCJt6XG8c6keFeEU0L22vNBA">
              youtube.com/gaurav-sunthwal
            </a>
          </div>
        </div>
        <div className="contactForm">
          <div className="topText">
            <RxDividerHorizontal
              className="line"
              style={{ color: "#01d293" }}
            />
            <div className="text">
              <h2>Contact me</h2>
            </div>
          </div>
          <form onSubmit={submitHanlder}>
            <input
              type="name"
              name="name"
              className="name"
              onChange={changeHandler}
              value={formStatus.name || ""}
              placeholder="Your Full Name"
            />
            <input
              type="email"
              name="email"
              id=""
              onChange={changeHandler}
              value={formStatus.email || ""}
              placeholder="Your Email Id"
            />
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              onChange={changeHandler}
              value={formStatus.message || ""}
              placeholder="Enter Message"
            ></textarea>
            <button className="btn" onClick={sendEmail} onSubmit={sendEmail}>
              Send Messege
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
