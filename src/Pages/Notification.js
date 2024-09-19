import React, { useState, useEffect, useRef } from 'react';
import '../css/notif.css';

const Notif = () => {
  const [notifications, setNotifications] = useState([]);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  const containerRef = useRef(null); // Reference to notification container

  // Array of possible notifications
  const notificationTemplates = [
    { title: 'New Event Assignment', message: 'You have been assigned to a new event!' },
    { title: 'Reminder', message: 'Don\'t forget the team meeting at 4 PM!' },
    { title: 'Event Canceled', message: 'Your scheduled event for tomorrow has been canceled.' },
    { title: 'Update', message: 'Your event schedule has been updated.' },
    { title: 'New Message', message: 'You have received a new message from the event coordinator.' },
    { title: 'Event Reminder', message: 'The charity run event starts tomorrow at 9 AM.' }
  ];

  // Function to randomly pick a notification template
  const getRandomNotification = () => {
    const randomIndex = Math.floor(Math.random() * notificationTemplates.length);
    return notificationTemplates[randomIndex];
  };

  // Simulate receiving notifications 
  useEffect(() => {
    const interval = setInterval(() => {
      if (notifications.length < 10) {
        const randomNotification = getRandomNotification();
        addNotification(randomNotification.title, randomNotification.message);
      }
    }, 1000); // New notification every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [notifications]);

  // Add a new notification with a unique id and limit to 10 notifications
  const addNotification = (title, message) => {
    const newNotification = {
      id: Date.now(), // Using timestamp to ensure a unique id
      title: title,
      message: message,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications((prevNotifications) => {
      const updatedNotifications = [newNotification, ...prevNotifications];
      return updatedNotifications.slice(0, 10);
    });
  };

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
