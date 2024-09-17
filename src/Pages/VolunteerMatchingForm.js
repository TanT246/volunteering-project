import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Typography, Box, Grid, Paper } from '@mui/material';

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
                    fontFamily: 'Bangers, sans-serif', 
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
  );
}

export default VolunteerMatchingForm;
