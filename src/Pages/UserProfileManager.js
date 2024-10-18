import React, { useState, useEffect } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Box,
  Typography,
  Checkbox,
  ListItemText,
  Paper,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import axios from 'axios';
import './styles.css';

const ProfileForm = () => {
  const [fullName, setFullName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [skills, setSkills] = useState([]);
  const [preferences, setPreferences] = useState('');
  const [availability, setAvailability] = useState([null, null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/users/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      })
      .then((response) => {
        const { fullName, profilePicture, skills, preferences, availability } = response.data;
        setFullName(fullName);
        setProfilePicture(profilePicture || null);
        setSkills(skills || []);
        setPreferences(preferences || '');
        setAvailability(availability || [null, null]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
        setLoading(false);
      });
  }, []);

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData for both text and file data
    const formData = new FormData();
    formData.append('fullName', fullName);
    
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    
    formData.append('skills', JSON.stringify(skills)); // skills sent as a JSON string
    formData.append('preferences', preferences);
    formData.append('availability', JSON.stringify(availability)); // date range sent as a JSON string

    try {
      // Send PUT request to the backend
      await axios.put('http://localhost:5000/api/users/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // required for file uploads
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // token from localStorage
        },
      });

      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div className="profile-page">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
          <Paper
            elevation={5}
            sx={{
              padding: '2rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              border: '2px solid #000',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
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
                sx={{ mb: 2 }}
              />
              <Typography variant="body1" sx={{ mb: 1 }}>
                Profile Picture
              </Typography>
              <input
                accept="image/*"
                type="file"
                onChange={handleProfilePictureChange}
                style={{ marginBottom: '16px' }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Skills</InputLabel>
                <Select
                  multiple
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {[
                    'Teamwork',
                    'Safety Awareness',
                    'Classroom Management',
                    'Mentorship',
                    'Creativity',
                    'Time Management',
                    'Lesson Planning',
                    'Adaptability',
                    'Algebra',
                    'Geometry',
                    'Basic coding',
                    'Physics',
                    'Chemistry',
                  ].map((skill) => (
                    <MenuItem key={skill} value={skill}>
                      <Checkbox checked={skills.includes(skill)} />
                      <ListItemText primary={skill} />
                    </MenuItem>
                  ))}
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
              <Typography variant="body1" sx={{ mb: 1 }}>
                Date Availability
              </Typography>
              <DateRangePicker
                startText="Start Date"
                endText="End Date"
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
          </Paper>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default ProfileForm;
