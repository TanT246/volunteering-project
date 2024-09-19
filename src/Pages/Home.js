import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, IconButton } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'; // Example icon
import EventAvailableIcon from '@mui/icons-material/EventAvailable'; // Example icon
import HowToRegIcon from '@mui/icons-material/HowToReg'; // Example icon

function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/batman-background.jpg')`, // Path to your Batman image
          backgroundSize: 'cover', // Ensure the image covers the entire background
          backgroundPosition: 'center',
          height: '100vh', // Full-screen height
          display: 'flex',
          alignItems: 'center', // Vertical alignment of content
          justifyContent: 'space-between', // Horizontal alignment
          padding: '0 5%', // Padding on the left and right for spacing
          color: '#FFF',
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Arial, sans-serif',
              color: '#A0A0A0', // Grey subheading color
              fontSize: '1.5rem',
              mb: 2, // Margin bottom
            }}
          >
            INSPIRE THE NEXT GENERATION OF HEROES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Bangers, sans-serif',
              color: '#FFFFFF', // White color for "BE A"
              fontSize: '4rem', // Larger font size for the main title
              display: 'inline-block',
              pr: 1,
            }}
          >
            BE A
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Bangers, sans-serif',
              color: '#00FF00', // Green color for "STEM"
              fontSize: '4rem', // Same size for continuity
              display: 'inline-block',
              pr: 1,
            }}
          >
            STEM
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Bangers, sans-serif',
              color: '#FFC107', // Yellow color for "SUPERHERO!"
              fontSize: '4rem',
              display: 'inline-block',
            }}
          >
            SUPERHERO!
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#D62828', // Red button color
                color: '#FFF',
                fontFamily: 'Bangers, sans-serif',
                fontWeight: 'bold',
                padding: '12px 36px',
                fontSize: '1.2rem',
                '&:hover': {
                  backgroundColor: '#C62828',
                },
              }}
            >
              START
            </Button>
          </Box>
        </Container>
        <Box
          sx={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/batman-image.png')`, // Path to Batman image in public folder
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            width: '40%',
            height: '100%',
          }}
        />
      </Box>

      {/* What to Know Section with Light Blue Background */}
      <Box sx={{ backgroundColor: '#ADD8E6', py: 8 }}> {/* Light Blue Background */}
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Bangers, sans-serif',
              textAlign: 'center',
              color: '#000', // Black text for the title
              mb: 4,
            }}
          >
            What You Need to Know
          </Typography>
          <Grid container spacing={4}>
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px', // Set a fixed height for all cards
                  transition: 'transform 0.3s, box-shadow 0.3s', // Transition for hover effects
                  '&:hover': {
                    transform: 'scale(1.05)', // Slight zoom effect on hover
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)', // Larger shadow on hover
                  },
                }}
              >
                <CardContent>
                  <IconButton>
                    <VolunteerActivismIcon fontSize="large" sx={{ color: '#00FF00' }} /> {/* Green icon */}
                  </IconButton>
                  <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                    Learn About Volunteering
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Discover the benefits of volunteering and how you can make a difference in your community.
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ color: '#00FF00', borderColor: '#00FF00', '&:hover': { borderColor: '#00FF00' } }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent>
                  <IconButton>
                    <HowToRegIcon fontSize="large" sx={{ color: '#D62828' }} /> {/* Red icon */}
                  </IconButton>
                  <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                    How to Get Involved
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Sign up for events and join workshops that suit your interests and skills.
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ color: '#D62828', borderColor: '#D62828', '&:hover': { borderColor: '#D62828' } }}
                  >
                    Get Involved
                  </Button>
                </Box>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '300px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent>
                  <IconButton>
                    <EventAvailableIcon fontSize="large" sx={{ color: '#FFC107' }} /> {/* Yellow icon */}
                  </IconButton>
                  <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                    Upcoming Opportunities
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Stay updated on the latest events where you can lend your talents and be a hero.
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', pb: 2 }}>
                  <Button
                    variant="outlined"
                    sx={{ color: '#FFC107', borderColor: '#FFC107', '&:hover': { borderColor: '#FFC107' } }}
                  >
                    See Events
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: '#000',
          color: '#FCBF49', // Yellow color from your theme
          textAlign: 'center',
          padding: '16px 0',
          marginTop: 'auto',
        }}
      >
        <Typography variant="body1" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>
          © 2024 STEM Superheroes - All Rights Reserved
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button color="inherit" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>Privacy Policy</Button>
          <Button color="inherit" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>Terms of Service</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
