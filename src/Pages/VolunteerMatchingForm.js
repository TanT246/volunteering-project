import React, { useState, useEffect } from 'react';
import { Container, TextField, MenuItem, Button, Typography, Box, Grid, Paper } from '@mui/material';

const sampleVolunteers = [
  { _id: '1', name: 'John Doe', skills: 'Coding', location: 'New York' },
  { _id: '2', name: 'Jane Smith', skills: 'Design', location: 'San Francisco' },
  { _id: '3', name: 'Bob Johnson', skills: 'Coding', location: 'New York' },
];

const sampleEvents = [
  { _id: '1', name: 'Hackathon 2024', skillsRequired: 'Coding', location: 'New York' },
  { _id: '2', name: 'Design Sprint', skillsRequired: 'Design', location: 'San Francisco' },
  { _id: '3', name: 'NYC Code Jam', skillsRequired: 'Coding', location: 'New York' },
];

function VolunteerMatchingForm() {
  const [volunteers] = useState(sampleVolunteers);
  const [events] = useState(sampleEvents);
  const [selectedVolunteer, setSelectedVolunteer] = useState('');
  const [matchedEvents, setMatchedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');

  useEffect(() => {
    setMatchedEvents([]);
    setSelectedEvent('');
  }, [selectedVolunteer]);

  const handleVolunteerChange = (e) => {
    const volunteerId = e.target.value;
    setSelectedVolunteer(volunteerId);

    const volunteer = volunteers.find(v => v._id === volunteerId);
    const matches = events.filter(
      event => event.skillsRequired.includes(volunteer.skills) && event.location === volunteer.location
    );

    setMatchedEvents(matches);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVolunteer && selectedEvent) {
      alert(`Volunteer and event matched! Volunteer ID: ${selectedVolunteer}, Event ID: ${selectedEvent}`);
    } else {
      alert('No event selected.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/dynamic-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020',
        padding: '2rem',
        position: 'relative',
      }}
    >
      {/* Flash character image with shake animation */}
      <img
        src={`${process.env.PUBLIC_URL}/theflash.png`} 
        alt="Flash Character"
        style={{
          position: 'absolute',
          left: '0', 
          top: '50%', 
          transform: 'translate(50%, -50%)', 
          width: '22vw', 
          zIndex: 1, 
          animation: 'shake 0.5s ease-in-out infinite' 
        }}
      />

      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6}>
            <Paper
              elevation={10}
              sx={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.75)', // Slight transparency
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                  color: '#D62828', // Red for the title
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
                    fontFamily: 'Roboto, sans-serif',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {volunteers.map((volunteer) => (
                    <MenuItem key={volunteer._id} value={volunteer._id}>
                      {volunteer.name}
                    </MenuItem>
                  ))}
                </TextField>

                {/* Matched Event Dropdown */}
                <TextField
                  select
                  label="Select Matched Event"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    fontFamily: 'Roboto, sans-serif',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                  disabled={!matchedEvents.length} // Disable if no matches
                >
                  {matchedEvents.length ? (
                    matchedEvents.map((event) => (
                      <MenuItem key={event._id} value={event._id}>
                        {event.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">
                      No Matching Event Found
                    </MenuItem>
                  )}
                </TextField>

                <Box mt={4}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={!selectedEvent}
                    sx={{
                      padding: '16px 0',
                      backgroundColor: selectedEvent ? '#D62828' : '#FF4500',
                      '&:hover': {
                        backgroundColor: selectedEvent ? '#B22222' : '#FF6347',
                      },
                      fontFamily: 'Bangers, sans-serif',
                      fontWeight: 'bold',
                      color: '#FFF',
                      borderRadius: '12px',
                      fontSize: '1.2rem',
                      textTransform: 'uppercase',
                      transition: 'transform 0.2s ease-in-out',
                      '&:disabled': {
                        backgroundColor: '#B0B0B0',
                        cursor: 'not-allowed',
                      },
                    }}
                  >
                    {selectedEvent ? 'Match Volunteer' : 'No Match'}
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Keyframes for shaking animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(50%, -50%) translateX(0); }
            25% { transform: translate(50%, -50%) translateX(-2px); }
            50% { transform: translate(50%, -50%) translateX(0); }
            75% { transform: translate(50%, -50%) translateX(2px); }
            100% { transform: translate(50%, -50%) translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

export default VolunteerMatchingForm;
