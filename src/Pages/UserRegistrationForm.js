import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

function UserRegistrationForm() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [volunteeringPreferences, setVolunteeringPreferences] = useState({
    tshirts: '',
    ticketSales: '',
    raffleTicketSales: '',
    trafficParking: '',
    cleanupGrounds: '',
  });
  const [shiftPreferences, setShiftPreferences] = useState({
    morning: '',
    afternoon: '',
    evening: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePreferenceChange = (event, key) => {
    setVolunteeringPreferences({
      ...volunteeringPreferences,
      [key]: event.target.value,
    });
  };

  const handleShiftChange = (event, shift) => {
    setShiftPreferences({
      ...shiftPreferences,
      [shift]: event.target.checked ? 'Best time for me' : 'Not Available',
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !streetAddress || !city || !state || !zipCode) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError(''); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          dob,
          address: {
            streetAddress,
            streetAddress2,
            city,
            state,
            zipCode,
          },
          volunteeringPreferences,
          shiftPreferences,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'An error occurred. Please try again.');
      } else {
        // Store the token in local storage (or session storage) if provided
        localStorage.setItem('authToken', data.token);

        // Redirect to the home page
        navigate('/user-profile-manager');
      }
    } catch (error) {
      setError('Server error. Please try again later.');
      console.error('Error during registration:', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/ivy-town.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D3B66',
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
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                border: '2px solid #000',
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
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
                  fontSize: '2.5rem',
                }}
              >
                User Registration
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" required InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={handleClickShowPassword} edge="end">{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> }} />
                <TextField label="Confirm Password" type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Date of Birth" type="date" value={dob} onChange={(e) => setDob(e.target.value)} fullWidth margin="normal" InputLabelProps={{ shrink: true }} required />
                <TextField label="Street Address" value={streetAddress} onChange={(e) => setStreetAddress(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Street Address Line 2" value={streetAddress2} onChange={(e) => setStreetAddress2(e.target.value)} fullWidth margin="normal" />
                <TextField label="City" value={city} onChange={(e) => setCity(e.target.value)} fullWidth margin="normal" required />
                <TextField label="State / Province" value={state} onChange={(e) => setState(e.target.value)} fullWidth margin="normal" required />
                <TextField label="Postal / Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} fullWidth margin="normal" required />

                <Typography variant="h6" sx={{ marginTop: '1rem' }}>Preferences in Area of Volunteering</Typography>
                {['tshirts', 'ticketSales', 'raffleTicketSales', 'trafficParking', 'cleanupGrounds'].map((area) => (
                  <FormControl key={area} component="fieldset" margin="normal">
                    <FormLabel>{area.replace(/([A-Z])/g, ' $1')}</FormLabel>
                    <RadioGroup row value={volunteeringPreferences[area]} onChange={(e) => handlePreferenceChange(e, area)}>
                      {['Would love to!', 'Would like to.', 'Wouldn\'t mind helping.', 'Not this area.'].map((option) => (
                        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                      ))}
                    </RadioGroup>
                  </FormControl>
                ))}

                <Typography variant="h6" sx={{ marginTop: '1rem' }}>Preferences in Shifts</Typography>
                <FormGroup row>
                  {['morning', 'afternoon', 'evening'].map((shift) => (
                    <FormControlLabel
                      key={shift}
                      control={
                        <Checkbox
                          checked={shiftPreferences[shift] === 'Best time for me'}
                          onChange={(e) => handleShiftChange(e, shift)}
                        />
                      }
                      label={`${shift.charAt(0).toUpperCase() + shift.slice(1)}`}
                    />
                  ))}
                </FormGroup>

                {error && <Typography color="error" align="center" sx={{ marginTop: '1rem' }}>{error}</Typography>}

                <Box mt={3}>
                  <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#FCBF49', color: '#000', '&:hover': { backgroundColor: '#F2A600' }, padding: '12px 0', fontFamily: 'Bangers, sans-serif', fontWeight: 'bold', fontSize: '1.2rem' }}>Register</Button>
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
