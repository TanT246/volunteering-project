import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, IconButton } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'; 
import EventAvailableIcon from '@mui/icons-material/EventAvailable'; 
import HowToRegIcon from '@mui/icons-material/HowToReg'; 



function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/7023933.png')`, // Use first background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 5%',
          position: 'relative', // Set relative to position Batman image
          color: '#FFF',
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Arial, sans-serif',
              color: '#A0A0A0',
              fontSize: '1.5rem',
              mb: 2,
            }}
          >
            INSPIRE THE NEXT GENERATION OF HEROES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Bangers, sans-serif',
              color: '#FFFFFF',
              fontSize: '4rem',
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
              color: '#00FF00',
              fontSize: '4rem',
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
              color: '#FFC107',
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
                backgroundColor: '#D62828',
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
            backgroundImage: `url('${process.env.PUBLIC_URL}/Flying-Batman-Speed-Transparent-PNG.png')`, // Use your Batman image
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            width: '40%', // Adjust width to fit layout
            height: '100%',
            position: 'absolute',
            right: '0', // Position Batman image to the right
            top: '0',
          }}
        />
      </Box>

      {/* What to Know Section */}
      <Box sx={{ backgroundColor: '#ADD8E6', py: 8 }}>
        <Container>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Bangers, sans-serif',
              textAlign: 'center',
              color: '#000',
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
                    <VolunteerActivismIcon fontSize="large" sx={{ color: '#00FF00' }} />
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
                    <HowToRegIcon fontSize="large" sx={{ color: '#D62828' }} />
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
                    <EventAvailableIcon fontSize="large" sx={{ color: '#FFC107' }} />
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
          color: '#FCBF49',
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
