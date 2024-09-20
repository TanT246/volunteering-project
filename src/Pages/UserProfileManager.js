import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Box, Typography, Checkbox, ListItemText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import './styles.css'; // Import the CSS file

const ProfileForm = () => {
  const [fullName, setFullName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [skills, setSkills] = useState([]);
  const [preferences, setPreferences] = useState('');
  const [availability, setAvailability] = useState([null, null]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({
      fullName, address1, address2, city, state, zipCode, skills, preferences, availability
    });
  };

  return (
    <div className="profile-page">  {/* Unique class wrapping the component */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <img src="/TMNT drawing.png" alt="Turtle" className="center-image" />
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
          <Typography variant="h4" gutterBottom>
            User Profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              inputProps={{ maxLength: 50 }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
              inputProps={{ maxLength: 100 }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address 2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              inputProps={{ maxLength: 100 }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              inputProps={{ maxLength: 100 }}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>State</InputLabel>
              <Select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                {/* Map through states */}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              inputProps={{ maxLength: 9 }}
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Skills</InputLabel>
              <Select
                multiple
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                {/* Map through skills */}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Preferences"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              sx={{ mb: 2 }}
            />
            <DateRangePicker
              startText="Start"
              endText="End"
              value={availability}
              onChange={(newValue) => setAvailability(newValue)}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} sx={{ mb: 2 }} />
                  <TextField {...endProps} sx={{ mb: 2 }} />
                </>
              )}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default ProfileForm;
