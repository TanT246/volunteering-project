import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, TextField, MenuItem, Button, Box, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';  // Import Link for routing

function VolunteerMatchingForm() {
  const [volunteers] = useState([]); // Mock data can be re-added later
  const [events] = useState([]); // Mock data can be re-added later
  const [selectedVolunteer, setSelectedVolunteer] = useState('');
  const [matchedEvent, setMatchedEvent] = useState('');

  const handleVolunteerChange = (e) => {
    const volunteerId = e.target.value;
    setSelectedVolunteer(volunteerId);

    // Find the matched event based on volunteer skills and location
    const volunteer = volunteers.find(v => v._id === volunteerId);
    const matchedEvent = events.find(event => event.skillsRequired.includes(volunteer.skills) && event.location === volunteer.location);

    if (matchedEvent) {
      setMatchedEvent(matchedEvent._id);
    } else {
      setMatchedEvent('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVolunteer && matchedEvent) {
      // Log the matching for now (replace with actual backend call later)
      console.log('Volunteer and event matched:', selectedVolunteer, matchedEvent);
    } else {
      console.error('No matching event found');
    }
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
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={8} md={6}>
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
                Match Volunteers to Events
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  select
                  label="Select Volunteer"
                  value={selectedVolunteer}
                  onChange={handleVolunteerChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Permanent Marker, sans-serif', 
                  }}
                >
                  {volunteers.map((volunteer) => (
                    <MenuItem key={volunteer._id} value={volunteer._id}>
                      {volunteer.name}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Matched Event"
                  value={matchedEvent ? events.find((event) => event._id === matchedEvent)?.name : 'No Matching Event'}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Permanent Marker, sans-serif', 
                  }}
                />

                <Box mt={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={!matchedEvent}
                    sx={{
                      padding: '12px 0',
                      backgroundColor: matchedEvent ? '#43a047' : '#d32f2f', // Green if matched, Red if no match
                      '&:hover': {
                        backgroundColor: matchedEvent ? '#388e3c' : '#c62828',
                      },
                      fontFamily: 'Bangers, sans-serif', // Comic-book font for the button
                      fontWeight: 'bold',
                    }}
                  >
                    Match Volunteer
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

export default VolunteerMatchingForm;
