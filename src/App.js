// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './Pages/Header';
import Login from './Pages/Login'; // Importing the path for the Login page
import VolunteerMatchingForm from './Pages/VolunteerMatchingForm'; // Importing the path for the Volunteer Matching Form
import Home from './Pages/Home'; //import home page from /pages
import UserRegistrationForm from './Pages/UserRegistrationForm';
import EventManager from './Pages/EventManager';
import UserProfileManager from './Pages/UserProfileManager'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for different pages */}
        <Routes>
          {/* Define the route for the login page */}
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserRegistrationForm" element={<UserRegistrationForm />} />
          {/* Define the route for the Volunteer Matching Form page */}
          <Route path="/volunteer-match" element={<VolunteerMatchingForm />} />
          <Route path="/event-manager" element={<EventManager />} />
          <Route path="/user-profile-manager" element={<UserProfileManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
