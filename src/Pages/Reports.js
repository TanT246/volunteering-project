import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/reports.css'; // Import the scoped CSS

function Reports() {
  const [volunteerHistory, setVolunteerHistory] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchVolunteerHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/volunteerHistory');
      setVolunteerHistory(response.data);
    } catch (error) {
      console.error('Error fetching volunteer history:', error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchVolunteerHistory();
    fetchEvents();
  }, []);

  const downloadReport = (type, format) => {
    window.open(`http://localhost:5000/api/reports/${type}?format=${format}`, '_blank');
  };

  return (
    <div className="reports-page">
      <div className="overlay"></div>
      <div className="center-wrapper">
        <div className="container">
          <h1 className="reports-title">Reports Dashboard</h1>
          <div className="reports-buttons">
            <button className="report-btn" onClick={() => downloadReport('volunteerHistory', 'pdf')}>
              Download Volunteer History (PDF)
            </button>
            <button className="report-btn" onClick={() => downloadReport('volunteerHistory', 'csv')}>
              Download Volunteer History (CSV)
            </button>
            <button className="report-btn" onClick={() => downloadReport('events', 'pdf')}>
              Download Event Report (PDF)
            </button>
            <button className="report-btn" onClick={() => downloadReport('events', 'csv')}>
              Download Event Report (CSV)
            </button>
          </div>

          <div className="data-preview">
            <h2>Volunteer History Preview</h2>
            <ul>
              {volunteerHistory.slice(0, 5).map((item, index) => (
                <li key={index}>
                  {item.volunteerName} - {item.eventName} ({new Date(item.eventDate).toLocaleDateString()})
                </li>
              ))}
            </ul>

            <h2>Event Details Preview</h2>
            <ul>
              {events.slice(0, 5).map((event, index) => (
                <li key={index}>
                  {event.eventName} - {event.location} ({new Date(event.eventDate).toLocaleDateString()})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
