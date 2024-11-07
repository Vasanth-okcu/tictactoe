// src/App.js
import React from 'react';
import './App.css';
import MyProfile from './MyProfile'; // Import the MyProfile component

function App() {
  const user = {
    name: 'Vasanth',
    bio: 'I am a passionate web developer with expertise in React and JavaScript. I love building interactive user interfaces and solving complex problems with elegant solutions. When I’m not coding, I enjoy learning new technologies and contributing to open-source projects. I’m always looking for new challenges to grow my skills and collaborate with talented individuals.',
    imageUrl: '/pngtree-a-letter-triangle-logo-image_81987.jpg', // Image from the public folder
  };

  const socialLinks = [
    { icon: '📧', url: 'https://mail.google.com/' },   // Gmail (as emoji)
    { icon: 'GitHub', url: 'https://github.com/' },    // GitHub (text link)
    { icon: '🔗', url: 'https://www.linkedin.com/' },   // LinkedIn (as emoji)
    { icon: '🐦', url: 'https://twitter.com/' },        // Twitter (as emoji)
  ];

  const projects = [
    {
      name: 'Task Manager',
      description: 'A simple yet powerful task management app built with React and Redux. It helps users organize their daily tasks with ease.',
      imageUrl: '/attachment_20319607.png', // Add an image in your public folder for this
      link: 'https://www.example-taskmanager.com',
    },
    {
      name: 'Weather App',
      description: 'A weather forecasting app using OpenWeather API. It shows current weather and 5-day forecasts for any city around the globe.',
      imageUrl: '/download.jpg', // Add an image in your public folder for this
      link: 'https://www.example-weatherapp.com',
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website that showcases my projects, skills, and experience. Built with React and styled-components.',
      imageUrl: '/page_1_thumb_large.jpg', // Add an image in your public folder for this
      link: 'https://www.example-portfolio.com',
    }
  ];

  return (
    <div className="App">
      <h1>My Profile</h1>
      <MyProfile 
        name={user.name} 
        bio={user.bio} 
        imageUrl={user.imageUrl} 
        socialLinks={socialLinks} // Pass social links as a prop
        projects={projects}      // Pass project details as a prop
      />
    </div>
  );
}

export default App;
