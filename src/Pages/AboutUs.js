// src/Pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Full-Screen Image with Title */}
      <section className="hero-image">
        <div className="hero-text">
          <h1>About Us</h1>
        </div>
      </section>

      {/* Organization Summary */}
      <section className="organization-summary">
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            STEM Superheroes is a volunteer-driven organization dedicated to empowering
            the next generation of scientists, engineers, and innovators. Our mission
            is to provide underrepresented students with access to hands-on STEM
            activities, mentorship opportunities, and educational resources to ignite
            a lifelong passion for science, technology, engineering, and mathematics.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/batman.png" alt="Xavier" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
            <p>John is a passionate educator and engineer who founded STEM Superheroes with the goal of inspiring future generations in STEM fields.</p>
          </div>
          <div className="team-member">
            <img src="/flash.png" alt="Tan" />
            <h3>Jane Smith</h3>
            <p>Program Director</p>
            <p>Jane is responsible for overseeing all STEM programs and ensuring students get the most out of their hands-on experiences.</p>
          </div>
          <div className="team-member">
            <img src="/powergirl.png" alt="Shinelle" />
            <h3>Emily Brown</h3>
            <p>Volunteer Coordinator</p>
            <p>Emily manages our wonderful volunteers and ensures that each STEM Superhero has the support they need to succeed.</p>
          </div>
          <div className="team-member">
            <img src="/bumblebee.png" alt="Widyan" />
            <h3>Michael Lee</h3>
            <p>Outreach Specialist</p>
            <p>Michael works to build partnerships with schools and organizations to bring our STEM programs to underserved communities.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;