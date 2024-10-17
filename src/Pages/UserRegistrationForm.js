import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, Paper, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function UserRegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(''); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'An error occurred. Please try again.');
      } else {
        console.log('User registered successfully:', data);
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      setError('Server error. Please try again later.');
      console.error('Error during registration:', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the visibility state
  };

  return (
    <div
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/ivy-town.png')`, // Corrected path for image in the public folder
        backgroundSize: 'cover', // Ensure the image covers the entire screen
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Fullscreen height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D3B66', // Add background color for better fallback
      }}
    >
      <Container maxWidth="sm">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Paper
              elevation={5}
              sx={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)', // Lower transparency
                border: '2px solid #000', // Comic-style effect with lighter border
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', // Softer shadow
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: 'Bangers, sans-serif',
                  fontSize: '2.5rem', // Increase size for better readability
                  border: 'white'
                }}
              >
                User Registration
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  error={Boolean(error)} // Indicates error on TextField
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Permanent Marker, sans-serif',
                    border: error ? '2px solid red' : 'none', // Red border if there's an error
                  }}
                />

                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'} // Toggle between text and password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  error={Boolean(error)} // Indicates error on TextField
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Permanent Marker, sans-serif',
                    border: error ? '2px solid red' : 'none', // Red border if there's an error
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />} {/* Show appropriate icon */}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {error && (
                  <Typography color="error" align="center" sx={{ marginTop: '1rem' }}>
                    {error}
                  </Typography>
                )}

                <Box mt={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: '#FCBF49',
                      color: '#000',
                      '&:hover': {
                        backgroundColor: '#F2A600',
                      },
                      padding: '12px 0',
                      fontFamily: 'Bangers, sans-serif',
                      fontWeight: 'bold',
                      fontSize: '1.2rem', // Make button text larger
                    }}
                    fullWidth
                  >
                    Register
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default UserRegistrationForm;
