import React from 'react';
import './EventManager.css';  // Import the CSS for styling

const EventManager = () => {
  return (
    <div className="event-manager-container">
      <div className="manager-heading">
        <h1>Manage Your Event</h1>
        <p>Step into the hero's shoes and organize your next adventure!</p>
      </div>
      
      <form className="event-manager-form">
        <div className="form-group">
          <label>Event Name</label>
          <input type="text" placeholder="Enter event name" maxLength="100" required />
        </div>

        <div className="form-group">
          <label>Event Description</label>
          <textarea placeholder="Enter event description" required></textarea>
        </div>

        <div className="form-group">
          <label>Event Date</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="Enter event location" required />
        </div>

        <div className="form-group">
          <label>Urgency Level</label>
          <select required>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Update Event</button>
      </form>
    </div>
  );
};

export default EventManager;
