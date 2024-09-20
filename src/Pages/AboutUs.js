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
          At STEM Superheroes, we’re on a heroic quest to empower the next generation of scientists, engineers, and innovators! Our mission is to equip underrepresented students with the tools they need to unlock their potential through exhilarating hands-on STEM activities, mentorship from seasoned heroes, and invaluable educational resources. Together, we ignite a lifelong passion for science, technology, engineering, and mathematics, shaping the heroes of tomorrow!
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/batman.png" alt="Xavier" />
            <h3>Xavier "The Innovator" Mares</h3>
            <p><strong>Founder & CEO</strong></p>
            <p>At the helm of our heroic journey, Xavier spearheads our initiatives with groundbreaking ideas and an unparalleled passion that ignites the hearts of everyone around him!</p>
          </div>
          <div className="team-member">
            <img src="/flash.png" alt="Tan" />
            <h3>Tan "Brainiac" Tran</h3>
            <p><strong>Program Director</strong></p>
            <p>As the mastermind behind our STEM initiatives, Tan ensures that every student embarks on an epic journey, maximizing their hands-on experiences in the world of science and technology.</p>
          </div>
          <div className="team-member">
            <img src="/powergirl.png" alt="Shinelle" />
            <h3>Shinelle "The Connector" Baretto</h3>
            <p><strong>Outreach Specialist</strong></p>
            <p>With the magnetic charm of a true hero, Shinelle unites communities through her boundless energy and unwavering determination, bringing people together to amplify our mission!</p>
          </div>
          <div className="team-member">
            <img src="/bumblebee.png" alt="Widyan" />
            <h3>Widyan "The Protector" Hussien</h3>
            <p><strong>Volunteer Coordinator</strong></p>
            <p>Widyan , our guiding star, rallies our incredible volunteers, making sure that each STEM Superhero is equipped with the support and resources they need to soar to new heights!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;