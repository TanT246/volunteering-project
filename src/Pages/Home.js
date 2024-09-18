import React from 'react';
import { Container, Box, Typography, Button, Grid, AppBar, Toolbar, Card, CardContent } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#2F2F9B' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Bangers, sans-serif', color: '#FFF' }}>
            STEM Superheroes
          </Typography>
          <Button color="inherit" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF', marginRight: '16px' }}>Home</Button>
          <Button color="inherit" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF', marginRight: '16px' }}>About Us</Button>
          <Button color="inherit" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF', marginRight: '16px' }}>Get Involved</Button>
          <Button color="inherit" sx={{ fontFamily: 'Permanent Marker, sans-serif', color: '#FFF' }}>Workshops</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('/812dxSdkpPL._AC_UF894,1000_QL80_.jpg')`, // Add your image here
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Center the image to ensure the circle is properly aligned
          height: 'calc(100vh - 64px)', // Full-screen hero section minus the navbar height
          display: 'flex',
          alignItems: 'center', // Vertically center the content
          justifyContent: 'center', // Horizontally center the content
          color: '#FFF',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Bangers, sans-serif', // Comic-book style font
              color: '#FFF',
              mb: 2, // Margin bottom for spacing
            }}
          >
            Be a STEM Superhero!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#FFF',
              fontFamily: 'Permanent Marker, sans-serif', // Handwritten comic style
            }}
          >
            Inspire the next generation of scientists and innovators.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FCBF49', // Yellow color from your theme
              color: '#000',
              '&:hover': {
                backgroundColor: '#F2A600',
              },
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              fontFamily: 'Bangers, sans-serif', // Comic font for button
              mt: 3, // Added margin-top for spacing
            }}
          >
            Get Involved
          </Button>
        </Container>
      </Box>

      {/* Volunteer Information Section */}
      <Container sx={{ mt: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Bangers, sans-serif',
            textAlign: 'center',
            color: '#D62828', // Red color from your theme
            mb: 4,
          }}
        >
          What You Can Do
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '250px' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                  Lead Workshops
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>
                  Help lead fun, hands-on STEM workshops for kids and inspire the next generation of engineers and scientists.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '250px' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                  Mentor Students
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>
                  Become a mentor and provide guidance, encouragement, and support to students in their STEM journey.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '250px' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                  Plan Events
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>
                  Join our event planning team and help organize exciting STEM events for the community.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Upcoming Workshops Section (Now Blank) */}
      <Container sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Bangers, sans-serif',
            textAlign: 'center',
            color: '#2F2F9B', // Dark blue color for section title
            mb: 4,
          }}
        >
          Upcoming Workshops
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                  {/* Title and details intentionally left blank */}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>
                  {/* Description intentionally left blank */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: 'Permanent Marker, sans-serif', mb: 2 }}>
                  {/* Title and details intentionally left blank */}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'Permanent Marker, sans-serif' }}>
                  {/* Description intentionally left blank */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

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
