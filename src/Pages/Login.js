import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container" style={{ position: 'relative' }}>
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
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
