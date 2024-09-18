import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, TextField, Button, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';  // Make sure to import Link for navigation

function UserRegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }

    setError('');
    console.log('User registered with Email:', email, 'Password:', password);

    setEmail('');
    setPassword('');
  };

  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#2F2F9B' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Bangers, sans-serif', color: '#FFF' }}>
            STEM Superheroes
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF', marginRight: '16px' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF', marginRight: '16px' }}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/get-involved" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF', marginRight: '16px' }}>
            Get Involved
          </Button>
          <Button color="inherit" component={Link} to="/workshops" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF' }}>
            Workshops
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Form */}
      <Container maxWidth="sm">
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12}>
            <Paper
              elevation={5}
              sx={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  color: '#D62828', 
                  fontWeight: 'bold',
                  fontFamily: 'Bangers, sans-serif', 
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
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Permanent Marker, sans-serif', 
                  }}
                />

                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Permanent Marker, sans-serif', 
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
    </>
  );
}

export default UserRegistrationForm;
