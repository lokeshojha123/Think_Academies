import React from 'react';
import "./MySelf.css";
import profilepic from "../../assets/profilepic.webp";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const MySelf = () => {
  return (
    <div id="home" className='myself'>
      <div className="myself-left">
        <img src={profilepic} alt="Profile" className="profile-pic" />
      </div>
      <div className="myself-right">
        <h1>
          <span>We are Think Academies</span>, we develop softwares and websites
        </h1>
        <p>
          We are Think Academies, specialized in software development. Our mission is to create
          innovative, user-friendly solutions that empower learners, educators, and institutions
          in the digital age.
        </p>
        <div className="action">
          <button className='connect'>
            <AnchorLink className='anchor-link' offset={50} href="#contact">
              Connect with us
            </AnchorLink>
          </button>
        
<button className="resume" onClick={() => {
  document.getElementById("our-profile")
  .scrollIntoView({ behavior: "smooth" });
  }}
  >
    Our Profile
  </button>


        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
