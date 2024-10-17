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
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
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
    <div className="notif-page"> {/* Unique class added here */}
      <div className="notification-wrapper">
        <h1>Notifications</h1>
        <div
          className="notification-container"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="notification">
                <h2>{notification.title}</h2>
                <p>{notification.message}</p>
                <span>{notification.time}</span>
                <button onClick={() => dismissNotification(notification.id)}>Dismiss</button>
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
