import React, { useState, useEffect, useRef } from 'react';
import styles from '../css/volunteerhistory.css'; // Make sure your CSS is imported correctly

const VolunteerHistory = () => {
  const [volunteerData, setVolunteerData] = useState([
    {
        eventName: 'Food Drive',
        eventDate: '2023-08-20',
        location: 'Community Center',
        hours: 4,
        participationStatus: 'Completed',
        urgency: 'Low',
      },
      {
        eventName: 'Beach Cleanup',
        eventDate: '2023-09-15',
        location: 'Seaside Beach',
        hours: 3,
        participationStatus: 'Completed',
        urgency: 'Medium',
      },
      {
        eventName: 'Charity Run',
        eventDate: '2023-10-01',
        location: 'City Park',
        hours: 5,
        participationStatus: 'Pending',
        urgency: 'High',
      },
      {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
        {
          eventName: 'Charity Run',
          eventDate: '2023-10-01',
          location: 'City Park',
          hours: 5,
          participationStatus: 'Pending',
          urgency: 'High',
        },
  ]);
  const [filteredData, setFilteredData] = useState(volunteerData); // For search functionality
  const [fadeIn, setFadeIn] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(false); // Default is hidden
  const containerRef = useRef(null); // Reference to the table container

  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Handle scroll and hide/show arrow based on content overflow
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setShowScrollArrow(false); // Hide arrow when scrolled to the bottom
    } else {
      setShowScrollArrow(true); // Show arrow when not at bottom
    }
  };

  // Check if content overflows container when component mounts or data changes
  useEffect(() => {
    const { scrollHeight, clientHeight } = containerRef.current;
    if (scrollHeight > clientHeight) {
      setShowScrollArrow(true);
    } else {
      setShowScrollArrow(false);
    }
  }, [volunteerData, filteredData]);

  // Search function
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = volunteerData.filter((event) =>
      event.eventName.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query) ||
      event.participationStatus.toLowerCase().includes(query) ||
      event.urgency.toLowerCase().includes(query) ||
      event.hours.toString().includes(query) // Add hours to the search criteria
    );
    setFilteredData(filtered);
  };

  return (
    <div className="background">
      <div className={`volunteer-history-wrapper ${fadeIn ? 'fade-in' : ''}`}>
        <h2 className="volunteer-history-title">Volunteer Participation History</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by event name, location, hours, status, or urgency..."
          className="search-bar"
          onChange={handleSearch}
        />

        <div
          className="table-container"
          onScroll={handleScroll}
          ref={containerRef}
        >
          <table className="history-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Hours</th>
                <th>Participation Status</th>
                <th>Urgency</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((event, index) => (
                  <tr key={index}>
                    <td>{event.eventName}</td>
                    <td>{event.eventDate}</td>
                    <td>{event.location}</td>
                    <td>{event.hours}</td>
                    <td
                      className={
                        event.participationStatus === 'Completed'
                          ? 'completed'
                          : 'pending'
                      }
                    >
                      {event.participationStatus}
                    </td>
                    <td className={event.urgency.toLowerCase()}>{event.urgency}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center' }}>
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Scroll Arrow */}
        {showScrollArrow && (
          <div className="volunteer-scroll-arrow-wrapper">
            <div
              className="volunteer-scroll-arrow"
              onClick={() =>
                containerRef.current.scrollTo({
                  top: containerRef.current.scrollHeight,
                  behavior: 'smooth',
                })
              }
            ></div>
          </div>
        )}
      </div>
      <img src="mrterrific.png" alt="Character" className="character-img" />
    </div>
  );
};

export default VolunteerHistory;
