import React, { useState } from 'react';
import './EventManager.css';
import MultiSelectDropdown from './MultiSelectDropdown'; // Matches the file name exactly

function EventManager() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    location: '',
    eventDate: '',
    urgency: '',
    requiredSkills: []
  });

  const skillsOptions = ['Coding', 'Teamwork', 'Communication', 'Leadership'];
  const urgencyOptions = ['Low', 'Medium', 'High'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData((prevData) => ({ ...prevData, requiredSkills: selectedSkills }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="event-manager">
      <form className="event-form" onSubmit={handleSubmit}>
        <h1>EVENT MANAGER</h1>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            maxLength="100"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Description</label>
          <textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <textarea
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Urgency</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Urgency</option>
            {urgencyOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Required Skills</label>
          <MultiSelectDropdown
            options={skillsOptions}
            selectedOptions={formData.requiredSkills}
            onChange={handleSkillsChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventManager;