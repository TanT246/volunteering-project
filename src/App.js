import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import Header from './Pages/Header';
import Login from './Pages/Login';
import VolunteerMatchingForm from './Pages/VolunteerMatchingForm';
import Home from './Pages/Home';
import Notif from './Pages/Notification';
import UserRegistrationForm from './Pages/UserRegistrationForm';
import EventManager from './Pages/EventManager';
import UserProfileManager from './Pages/UserProfileManager';
import NavBar from './component/NavBar';
import VolunteeringHistory from './Pages/VolunteerHistory';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserRegistrationForm" element={<UserRegistrationForm />} />
          <Route path="/volunteer-match" element={<VolunteerMatchingForm />} />
          <Route path="/event-manager" element={<EventManager />} />
          <Route path="/user-profile-manager" element={<UserProfileManager />} />
          <Route path="/notif" element={<Notif />} />
          <Route path="/volunteer-history" element={<VolunteeringHistory/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;