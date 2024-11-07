// src/MyProfile.js
import React, { useState } from 'react';
import './MyProfile.css';

const MyProfile = ({ name, bio, imageUrl, socialLinks, projects }) => {
  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className="profile-container">
      {/* Circular image */}
      <div className="profile-image-container">
        <img src={imageUrl} alt="Profile" className="profile-image" />
      </div>

      {/* User name */}
      <h2>{name}</h2>

      {/* Bio section */}
      <div className="bio-section">
        <p>
          <strong>Bio:</strong> 
          {showFullBio ? bio : `${bio.slice(0, 100)}...`}
        </p>
        <button onClick={toggleBio}>
          {showFullBio ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* Project section (under Read More and above social links) */}
      <div className="projects-section">
        <h3>Projects</h3>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img src={project.imageUrl} alt={project.name} className="project-image" />
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="social-icons">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon">
            {link.icon} {/* Display the icon as text */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
