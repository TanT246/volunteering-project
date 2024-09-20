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
      eventName: 'Blood Donation Camp',
      eventDate: '2023-07-25',
      location: 'Community Hall',
      hours: 2,
      participationStatus: 'Completed',
      urgency: 'Low',
    },
    {
      eventName: 'Animal Shelter Support',
      eventDate: '2023-06-30',
      location: 'City Animal Shelter',
      hours: 6,
      participationStatus: 'Completed',
      urgency: 'Medium',
    },
    {
      eventName: 'Park Restoration',
      eventDate: '2023-09-05',
      location: 'Greenwood Park',
      hours: 4,
      participationStatus: 'Pending',
      urgency: 'High',
    },
    {
      eventName: 'Winter Clothing Drive',
      eventDate: '2023-12-02',
      location: 'Downtown Square',
      hours: 3,
      participationStatus: 'Completed',
      urgency: 'Medium',
    },
    {
      eventName: 'Soup Kitchen Volunteering',
      eventDate: '2023-11-15',
      location: 'Local Shelter',
      hours: 5,
      participationStatus: 'Completed',
      urgency: 'Low',
    },
    {
      eventName: 'Tree Planting Initiative',
      eventDate: '2023-10-10',
      location: 'Westbrook Forest',
      hours: 6,
      participationStatus: 'Pending',
      urgency: 'High',
    },
    {
      eventName: 'School Supply Drive',
      eventDate: '2023-08-28',
      location: 'Town School',
      hours: 2,
      participationStatus: 'Completed',
      urgency: 'Medium',
    },
    {
      eventName: 'Neighborhood Cleanup',
      eventDate: '2023-07-18',
      location: 'Lakeside Avenue',
      hours: 4,
      participationStatus: 'Completed',
      urgency: 'Low',
    },
    {
      eventName: 'Food Bank Sorting',
      eventDate: '2023-10-20',
      location: 'Food Bank Warehouse',
      hours: 5,
      participationStatus: 'Pending',
      urgency: 'Medium',
    },
    {
      eventName: 'Holiday Gift Wrapping',
      eventDate: '2023-12-10',
      location: 'Community Mall',
      hours: 3,
      participationStatus: 'Pending',
      urgency: 'Low',
    },
    {
      eventName: 'Emergency Relief Support',
      eventDate: '2023-11-02',
      location: 'Disaster Relief Center',
      hours: 7,
      participationStatus: 'Completed',
      urgency: 'High',
    },
    {
      eventName: 'Art Auction Setup',
      eventDate: '2023-09-25',
      location: 'City Art Museum',
      hours: 4,
      participationStatus: 'Pending',
      urgency: 'Medium',
    },
  ]);

  const [filteredData, setFilteredData] = useState(volunteerData); // For search functionality
  const [selectedUrgencyFilters, setSelectedUrgencyFilters] = useState({
    Low: false,
    Medium: false,
    High: false,
  }); // Store selected urgencies as an object
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

  // Handle urgency filter checkbox change
  const handleUrgencyFilterChange = (e) => {
    const { value, checked } = e.target;
    setSelectedUrgencyFilters((prevFilters) => ({
      ...prevFilters,
      [value]: checked,
    }));
  };

  // Search function
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    filterData(query);
  };

  // Apply search and urgency filters
  const filterData = (searchQuery = "") => {
    let filtered = volunteerData.filter((event) => {
      // Search filter
      const matchesSearch =
        event.eventName.toLowerCase().includes(searchQuery) ||
        event.location.toLowerCase().includes(searchQuery) ||
        event.participationStatus.toLowerCase().includes(searchQuery) ||
        event.urgency.toLowerCase().includes(searchQuery) ||
        event.hours.toString().includes(searchQuery);

      // Urgency filter
      const selectedUrgencies = Object.keys(selectedUrgencyFilters).filter(
        (key) => selectedUrgencyFilters[key]
      );

      const matchesUrgency =
        selectedUrgencies.length === 0 || selectedUrgencies.includes(event.urgency);

      return matchesSearch && matchesUrgency;
    });

    setFilteredData(filtered);
  };

  // Apply urgency filters when selectedUrgencyFilters state changes
  useEffect(() => {
    filterData();
  }, [selectedUrgencyFilters]);

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

        {/* Urgency Filter Checkboxes */}
        <div className="filter-checkboxes">
          <label>
            <input
              type="checkbox"
              value="Low"
              onChange={handleUrgencyFilterChange}
              checked={selectedUrgencyFilters.Low}
            />
            Low
          </label>
          <label>
            <input
              type="checkbox"
              value="Medium"
              onChange={handleUrgencyFilterChange}
              checked={selectedUrgencyFilters.Medium}
            />
            Medium
          </label>
          <label>
            <input
              type="checkbox"
              value="High"
              onChange={handleUrgencyFilterChange}
              checked={selectedUrgencyFilters.High}
            />
            High
          </label>
        </div>

        {/* Table Container */}
        <div className="table-container" onScroll={handleScroll} ref={containerRef}>
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
                        event.participationStatus === 'Completed' ? 'completed' : 'pending'
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

        {/* Scroll Arrow Section */}
        <div className="scroll-arrow-section">
          {showScrollArrow && (
            <div className="volunteer-scroll-arrow" onClick={() => containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth',
              })}
            ></div>
          )}
        </div>
      </div>

      {/* Character Image */}
      <img src="mrterrific.png" alt="Character" className="character-img" />
    </div>
  );
};

export default VolunteerHistory;
