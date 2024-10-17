import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios for API calls
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import '../css/volunteerhistory.css'; // Your custom CSS file

const VolunteerHistory = () => {
  const [volunteerData, setVolunteerData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUrgencyFilters, setSelectedUrgencyFilters] = useState({
    Low: false,
    Medium: false,
    High: false,
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // State for sorting order
  const [showScrollArrow, setShowScrollArrow] = useState(false); // Manage arrow visibility
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false); // Control filter panel visibility
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const containerRef = useRef(null);

  // Fetch volunteer history data from the backend
  useEffect(() => {
    const fetchVolunteerHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/volunteerHistory');
        setVolunteerData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching volunteer history:', error);
      }
    };

    fetchVolunteerHistory();
  }, []);

  // Handle urgency filter checkbox change
  const handleUrgencyFilterChange = (e) => {
    const { value, checked } = e.target;
    setSelectedUrgencyFilters((prevFilters) => ({
      ...prevFilters,
      [value]: checked,
    }));
  };

  // Sort data by event date
  const sortDataByDate = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      const dateA = new Date(a.eventDate);
      const dateB = new Date(b.eventDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setFilteredData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sort order
  };

  // Search and filter data
  const filterData = () => {
    let filtered = volunteerData.filter((event) => {
      const matchesSearch =
        event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.participationStatus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.urgency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.hours.toString().includes(searchQuery);

      const selectedUrgencies = Object.keys(selectedUrgencyFilters).filter(
        (key) => selectedUrgencyFilters[key]
      );

      const matchesUrgency =
        selectedUrgencies.length === 0 || selectedUrgencies.includes(event.urgency);

      const eventDate = new Date(event.eventDate);
      const matchesDateRange =
        (!startDate || eventDate >= startDate) && (!endDate || eventDate <= endDate);

      return matchesSearch && matchesUrgency && matchesDateRange;
    });

    setFilteredData(filtered);
    checkOverflow(); // Check for overflow whenever data changes
  };

  useEffect(() => {
    filterData();
  }, [selectedUrgencyFilters, startDate, endDate, searchQuery]);

  // Scroll to bottom when arrow is clicked
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Check if there's more content to scroll
  const checkOverflow = () => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      setShowScrollArrow(scrollHeight > clientHeight); // Show the arrow if content overflows
    }
  };

  // Check if the scroll arrow should be shown during scrolling
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setShowScrollArrow(scrollTop + clientHeight < scrollHeight); // Hide arrow if scrolled to the bottom
  };

  // Toggle filter panel
  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="background">
      <div className="volunteer-history-wrapper fade-in">
        <h2 className="volunteer-history-title">Volunteer Participation History</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by event name, location, hours, status, or urgency..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Hamburger button to toggle filter panel */}
        <div className="hamburger" onClick={toggleFilterPanel}>
          ☰
        </div>

        {/* Filter Panel */}
        <div className={`filter-panel ${isFilterPanelOpen ? 'open' : ''}`}>
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

          {/* Date Range Filters */}
          <div className="date-range-filters">
            <label>Start Date: </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
              placeholderText="Select start date"
            />
            <label>End Date: </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              isClearable
              placeholderText="Select end date"
            />
          </div>

          {/* Sorting Button */}
          <div className="sort-button-wrapper">
            <button onClick={sortDataByDate} className="sort-button">
              Sort by Date {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="table-container" ref={containerRef} onScroll={handleScroll}>
          <table className="history-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th onClick={sortDataByDate} style={{ cursor: 'pointer' }}>
                  Date {sortOrder === 'asc' ? '↑' : '↓'}
                </th>
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
                    <td className={event.participationStatus === 'Completed' ? 'completed' : 'pending'}>
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
        {filteredData.length > 0 && (
          <div className="scroll-arrow-section">
            <div
              className={`volunteer-scroll-arrow ${showScrollArrow ? '' : 'hide'}`}
              onClick={scrollToBottom}
            >
              &#x25BC; {/* Unicode down arrow */}
            </div>
          </div>
        )}
      </div>
      <img src="mrterrific.png" alt="Character" className="character-img" />
    </div>
  );
};

export default VolunteerHistory;
