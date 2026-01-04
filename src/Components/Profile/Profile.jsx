import React, { useState } from 'react';
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="profile-section" id='our-profile'>
      <h1 className="profile-title">Our Profile</h1>

      {/* Tabs */}
      <div className="profile-tabs">
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About Us
        </button>
        <button
          className={activeTab === "mission" ? "active" : ""}
          onClick={() => setActiveTab("mission")}
        >
          Mission
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      {/* Content */}
      <div className="profile-content">
        {activeTab === "about" && (
          <p>
            Think Academies is a technology-focused organization specializing in
            software development, web applications, and professional training.
            We help individuals and businesses grow in the digital world.
          </p>
        )}

        {activeTab === "mission" && (
          <p>
            Our mission is to deliver innovative, scalable, and user-friendly
            digital solutions while empowering students with real-world skills.
          </p>
        )}

        {activeTab === "skills" && (
          <ul>
            <li>Web Development (React, MERN Stack)</li>
            <li>Backend & API Development</li>
            <li>UI/UX Design</li>
            <li>Student Training & Mentorship</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
