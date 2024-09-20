// ProfileForm.js
import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button, Box, Typography, Checkbox, FormGroup, FormControlLabel, TextareaAutosize } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { ListItemText } from '@mui/material';
import styles from './styles.css';
//import styles from './styles';
const { multiSelectStyles } = styles;



const states = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

const skills = [
  'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'CSS', 'HTML'
];

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
              {states.map((s) => (
                <MenuItem key={s.code} value={s.code}>
                  {s.name}
                </MenuItem>
              ))}
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
              MenuProps={multiSelectStyles}
            >
              {skills.map((skill) => (
                <MenuItem key={skill} value={skill}>
                  <Checkbox checked={skills.indexOf(skill) > -1} />
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
  );
};



export default ProfileForm;
