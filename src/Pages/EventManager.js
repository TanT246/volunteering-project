import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventManager.css'; // Your CSS styles
import MultiSelectDropdown from './MultiSelectDropdown'; // Assuming this is a custom component you have

function EventManager() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDescription: '',
    location: '',
    eventDate: '',
    urgency: '',
    requiredSkills: []
  });

  const [events, setEvents] = useState([]); // To hold fetched events
  const [editingEventId, setEditingEventId] = useState(null); // ID of the event being edited
  const skillsOptions = [
    'Teamwork',
    'Safety Awareness',
    'Classroom Management',
    'Mentorship',
    'Creativity',
    'Time Management',
    'Lesson Planning',
    'Adaptability',
    'Algebra',
    'Geometry',
    'Basic Coding',
    'Physics',
    'Chemistry',
    'Coding',
    'Communication',
    'Leadership',
    'tshirts',
    'ticketSales',
    'raffleTicketSales',
    'trafficParking',
    'cleanupGrounds'
  ];
  const urgencyOptions = ['Low', 'Medium', 'High'];

  // Fetch events from the backend
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  };

  // Populate form with event data for editing
  const handleEdit = (event) => {
    setEditingEventId(event._id); // Set the ID of the event being edited
    setFormData({
      eventName: event.eventName,
      eventDescription: event.eventDescription,
      location: event.location,
      eventDate: event.eventDate.split('T')[0], // Adjust date format
      urgency: event.urgency,
      requiredSkills: event.requiredSkills || [] // Populate required skills
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData((prevData) => ({ ...prevData, requiredSkills: selectedSkills }));
  };

  // Handle form submission for create/update
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = editingEventId
      ? `http://localhost:5000/api/events/${editingEventId}` // PUT request when editing
      : 'http://localhost:5000/api/events'; // POST request when creating

    const apiMethod = editingEventId ? axios.put : axios.post; // PUT when editing, POST when creating

    // Send the form data to the backend
    apiMethod(apiUrl, formData)
      .then(response => {
        console.log('Event saved:', response.data);

        if (editingEventId) {
          // Update the edited event in the list
          setEvents(prevEvents => prevEvents.map(event => event._id === editingEventId ? response.data : event));
        } else {
          // Add the new event to the event list
          setEvents(prevEvents => [...prevEvents, response.data]);
        }

        // Reset the form after submission
        resetForm();
      })
      .catch(error => {
        console.error('Error saving event:', error);
        alert('There was an issue saving the event. Please try again.');
      });
  };

  // Reset form after successful submission or cancel
  const resetForm = () => {
    setEditingEventId(null); // Reset editing ID
    setFormData({
      eventName: '',
      eventDescription: '',
      location: '',
      eventDate: '',
      urgency: '',
      requiredSkills: []
    });
  };

  // Handle delete event
  const handleDelete = (eventId) => {
    const confirmed = window.confirm("Are you sure you want to delete this event?");
    if (confirmed) {
      axios.delete(`http://localhost:5000/api/events/${eventId}`)
        .then(() => {
          // Remove the deleted event from the list
          setEvents(prevEvents => prevEvents.filter(event => event._id !== eventId));
        })
        .catch(error => {
          console.error('Error deleting event:', error);
          alert('There was an issue deleting the event. Please try again.');
        });
    }
  };

  return (
    <div className="event-manager">
      <form className="event-form" onSubmit={handleSubmit}>
        <h1>{editingEventId ? 'Edit Event' : 'Event Manager'}</h1>
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
          {editingEventId ? 'Update Event' : 'Submit'}
        </button>
        <button type="button" onClick={resetForm} className="reset-btn">Cancel</button>
      </form>

      {/* Display existing events */}
      <div className="event-list">
        <h2>Upcoming Events</h2>
        {events.length === 0 ? (
          <p>No events to display.</p>
        ) : (
          events.map(event => (
            <div key={event._id} className="event-item">
              <h3>{event.eventName}</h3>
              <p>{event.eventDescription}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
              <p><strong>Urgency:</strong> {event.urgency}</p>
              <button onClick={() => handleEdit(event)}>Edit</button> {/* Edit button */}
              <button onClick={() => handleDelete(event._id)}>Delete</button> {/* Delete button */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EventManager;
