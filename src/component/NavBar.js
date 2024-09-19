import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={`${process.env.PUBLIC_URL}/mask.png`} alt="Hero Icon" className="nav-icon" />
        <span className="nav-title">STEM Superheroes</span>
      </div>
      <ul className="nav-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/UserRegistrationForm">Register</a></li>
        <li className="nav-dropdown">
          <img src={`${process.env.PUBLIC_URL}/mask.png`} alt="Menu Icon" className="nav-dropdown-icon" />
          <div className="nav-dropdown-content">
            <a href="/volunteer-match">Volunteer Match</a>
            <a href="/event-manager">Event Management</a>
            <a href="/user-profile-manager">User Profile Management</a>
            <a href="/notif">Notifications</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;