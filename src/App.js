// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Login from './Pages/Login'; // Importing the path for the Login page
import VolunteerMatchingForm from './Pages/VolunteerMatchingForm'; // Importing the path for the Volunteer Matching Form
import Home from './Pages/Home'; //import home page from /pages
import UserRegistrationForm from './Pages/UserRegistrationForm';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for different pages */}
        <Routes>
          {/* Define the route for the login page */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserRegistrationForm" element={<UserRegistrationForm />} />
          {/* Define the route for the Volunteer Matching Form page */}
          <Route path="/volunteer-match" element={<VolunteerMatchingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
