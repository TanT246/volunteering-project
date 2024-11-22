import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/notif.css';

const Notif = () => {
  const [notifications, setNotifications] = useState([]);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const containerRef = useRef(null); // Reference to notification container

  // Fetch notifications from the back-end
  useEffect(() => {
    const fetchNotifications = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      console.log('Token being sent:', token); // Log the token

      if (!token) {
        console.error('No token found. User is not logged in.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/notifications', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });

        console.log('Fetched notifications:', response.data); // Log fetched notifications
        setNotifications(response.data); // Update state with fetched notifications
      } catch (error) {
        console.error('Error fetching notifications:', error.response?.data || error.message);
      }
    };

    fetchNotifications();
  }, []);

  // Dismiss a notification by its unique id
  const dismissNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  // Scroll to bottom and remove shadow/arrow
  const scrollToBottom = () => {
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
    setShowScrollArrow(false);
  };

  // Check if the user scrolled to the bottom
  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setShowScrollArrow(false); // Remove the arrow when scrolled to bottom
      } else {
        setShowScrollArrow(true); // Show the arrow if not at the bottom
      }
    }
  };

  return (
    <div className="notif-page">
      <div className="notification-wrapper">
        <h1>Notifications</h1>
        <div
          className="notification-container"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id || notification._id} className="notification">
                <h2>{notification.title}</h2>
                <p>{notification.message}</p>
                {/* Format and display the createdAt date */}
                <span>
                  {notification.createdAt
                    ? new Date(notification.createdAt).toLocaleString()
                    : 'Date not available'}
                </span>
                <button
                  onClick={() => dismissNotification(notification.id || notification._id)}
                >
                  Dismiss
                </button>
              </div>
            ))
          ) : (
            <p id="simple-text">No new notifications</p>
          )}
        </div>
        {/* Scroll arrow that appears when there's more to scroll */}
        <div className="scroll-arrow-wrapper">
          {notifications.length > 0 && (
            <div
              className={`scroll-arrow ${showScrollArrow ? '' : 'hide'}`}
              onClick={scrollToBottom}
            >
              &#x25BC; {/* Unicode down arrow */}
            </div>
          )}
        </div>
      </div>
      {/* Power Girl Image at the bottom-left */}
      <img src="powergirlpic.webp" alt="Power Girl" className="power-girl-img" />
    </div>
  );
};

export default Notif;
