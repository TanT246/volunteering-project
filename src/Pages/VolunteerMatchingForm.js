import React, { useState, useEffect } from 'react';
import { Container, TextField, MenuItem, Button, Typography, Box, Grid, Paper } from '@mui/material';
import axios from 'axios';

function VolunteerMatchingForm() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [matchedVolunteers, setMatchedVolunteers] = useState([]);
  const [selectedVolunteers, setSelectedVolunteers] = useState([]);

  // Fetch events from the backend server
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }
    fetchEvents();
  }, []);

  // Reset matched volunteers when a new event is selected
  useEffect(() => {
    setMatchedVolunteers([]);
    setSelectedVolunteers([]);
  }, [selectedEvent]);

  const handleEventChange = async (e) => {
    const eventId = e.target.value;
    setSelectedEvent(eventId);
  
    console.log('Selected event ID:', eventId);
  
    if (!eventId) {
      console.error('Event ID is not defined.');
      return;
    }
  
    try {
      // Fetch matching volunteers for the selected event using its ID
      const response = await axios.get(`http://localhost:5000/api/volunteerMatch/matchByEvent/${eventId}`);
      console.log('Matched volunteers:', response.data);
      setMatchedVolunteers(response.data);
    } catch (error) {
      console.error('Error fetching matched volunteers:', error);
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (selectedEvent && selectedVolunteers.length > 0) {
      try {
        // Send the match data to the backend to save the match
        const response = await axios.post('http://localhost:5000/api/volunteerMatch/saveMatch', {
          eventId: selectedEvent,
          volunteerIds: selectedVolunteers,
        });
  
        alert(response.data.message);
      } catch (error) {
        console.error('Error saving the match:', error);
        alert('Failed to save the match. Please try again.');
      }
    } else {
      alert('No volunteers selected.');
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
                Match Events to Volunteers
              </Typography>

              <form onSubmit={handleSubmit}>
              <TextField
                  select
                  label="Select Event"
                  value={selectedEvent}
                  onChange={handleEventChange}
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
                  {events.map((event) => (
                    <MenuItem key={event._id} value={event._id}>
                      {event.eventName}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  select
                  label="Select Matched Volunteers"
                  value={selectedVolunteers}
                  onChange={(e) => setSelectedVolunteers(e.target.value)}
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
                  SelectProps={{
                    multiple: true, // Enable multiple selection
                  }}
                  disabled={!matchedVolunteers.length} // Disable if no matches
                >
                  {matchedVolunteers.map((volunteer) => (
                    <MenuItem key={volunteer._id} value={volunteer._id}>
                      {volunteer.firstName} {volunteer.lastName}
                    </MenuItem>
                  ))}
                </TextField>


                <Box mt={4}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={!selectedVolunteers.length}
                    sx={{
                      padding: '16px 0',
                      backgroundColor: selectedVolunteers.length ? '#D62828' : '#FF4500',
                      '&:hover': {
                        backgroundColor: selectedVolunteers.length ? '#B22222' : '#FF6347',
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
                    {selectedVolunteers.length ? 'Match Event' : 'No Volunteers'}
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
