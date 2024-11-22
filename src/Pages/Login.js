import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' }); // Notification state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: '', type: '' }); // Clear previous notifications

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Show success message and navigate to the main page after 1 second
      setNotification({ message: 'Logging in...', type: 'success' });
      setTimeout(() => {
        navigate('/'); // Navigate to the main page
      }, 1000);
    } catch (error) {
      console.error('Error during login:', error.message);
      setNotification({ message: error.message, type: 'error' }); // Show error notification
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {/* Notification Box */}
        {notification.message && (
          <div className={`notification-box ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5925e7dd-fbd8-4b74-a807-ca9b2f32cf80/dfk6krm-b0e61169-2e29-43c9-8d8c-c5e511683f6a.png/v1/fill/w_721,h_1108/cyborg__dc_comics__render_by_christophermcgrath_dfk6krm-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjk1MSIsInBhdGgiOiJcL2ZcLzU5MjVlN2RkLWZiZDgtNGI3NC1hODA3LWNhOWIyZjMyY2Y4MFwvZGZrNmtybS1iMGU2MTE2OS0yZTI5LTQzYzktOGQ4Yy1jNWU1MTE2ODNmNmEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.12jrklUfwKYnV2E_cl0MqGd9_y7FIYZtPHDh9WdV3FA"
        alt="Decorative"
        className="bottom-right-image"
      />
    </div>
  );
}

export default Login;
