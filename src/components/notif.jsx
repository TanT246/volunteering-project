import React, { useState, useEffect } from 'react';
import '../css/notif.css';

const App = () => {
  const [notifications, setNotifications] = useState([]);

  // Simulate receiving notifications (event assignments, updates, reminders)
  useEffect(() => {
    const interval = setInterval(() => {
      addNotification('New Event Assignment', 'You have been assigned to a new event!');
    }, 10000); // New notification every 10 seconds

    return () => clearInterval(interval);
  }, [notifications]); // Ensure the notifications array is up to date

  // Add a new notification with a unique id
  const addNotification = (title, message) => {
    const newNotification = {
      id: Date.now(), // Using timestamp to ensure a unique id
      title: title,
      message: message,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
  };

  // Dismiss a notification by its unique id
  const dismissNotification = (id) => {
    setNotifications((prevNotifications) => 
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="App">
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
