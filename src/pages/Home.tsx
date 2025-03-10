import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Home = () => {
  const theme = useTheme();

  const featuredProjects = [
    {
      title: 'Mobile App Design',
      description: 'A modern mobile app interface with focus on user experience',
      image: 'https://source.unsplash.com/random/800x600?app',
    },
    {
      title: 'Web Platform',
      description: 'Enterprise web platform with complex data visualization',
      image: 'https://source.unsplash.com/random/800x600?website',
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity design for a tech startup',
      image: 'https://source.unsplash.com/random/800x600?brand',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  component="h1"
                  variant="h1"
                  color="text.primary"
                  gutterBottom
                >
                  UI/UX Designer & Developer
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Creating beautiful, intuitive, and functional digital experiences
                  that users love. Specializing in user interface design and
                  interactive prototypes.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/projects"
                  sx={{ mr: 2 }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/about"
                >
                  About Me
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://source.unsplash.com/random/600x400?design"
                  alt="Hero"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 6 }}
          >
            A selection of my recent design work
          </Typography>
          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/projects"
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 