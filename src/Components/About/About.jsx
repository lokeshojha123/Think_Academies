import React, { useEffect, useState } from 'react';
import "./About.css";
import profilepic1 from "../../assets/aboutimage.png";
import aboutpic from "../../assets/contactuspic.jpeg";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "Javascript", level: 85 },
    { name: "React JS, Bootstrap", level: 80 },
    { name: "Complete MERN Stack", level: 75 },
  ];

  const achievements = [
    { number: "10+", label: "Years of experience" },
    { number: "90+", label: "Projects Completed" },
    { number: "15+", label: "Happy Clients" },
  ];

  return (
    <div id="about" className="about">
      {/* TITLE */}
      <div className="about-title">
        <h1><span>About Us</span></h1>
        <img src={profilepic1} alt="Profile" className="about-title-img"/>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">
        <div className="about-left">
          <img id="titlepic" src={aboutpic} alt="About" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              We offer a range of skills in software development, backed by hands-on experience in successfully completing various projects.
            </p>
            <p>
              Our expertise covers both front-end and back-end development, ensuring high-quality, reliable solutions.
            </p>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="about-achievemants">
        {achievements.map((achieve, index) => (
          <div key={index} className="about-achievements">
            <h1>{achieve.number}</h1>
            <p>{achieve.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
