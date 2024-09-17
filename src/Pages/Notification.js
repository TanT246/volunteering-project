import React, { useState, useEffect } from 'react';
import '../css/notif.css';

const App = () => {
  const [notifications, setNotifications] = useState([]);

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
    }, 10000); // New notification every 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [notifications]); // Added notifications as dependency to stop when it reaches 10

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
      // Ensure the maximum number of notifications is 10
      return updatedNotifications.slice(0, 10);
    });
  };

  // Dismiss a notification by its unique id
  const dismissNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="notif">
      <div className="notification-wrapper">
        <h1>Notification Center</h1>
        <div className="notification-container">
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
            <p>No new notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
