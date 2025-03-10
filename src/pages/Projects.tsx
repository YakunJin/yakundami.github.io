import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Mobile App',
    description: 'A modern e-commerce app with a focus on personalization and user experience',
    image: 'https://source.unsplash.com/random/800x600?mobile,shopping',
    categories: ['Mobile', 'UI/UX', 'E-commerce'],
    year: '2023',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Enterprise dashboard with real-time data visualization and analytics',
    image: 'https://source.unsplash.com/random/800x600?dashboard',
    categories: ['Web', 'Dashboard', 'Enterprise'],
    year: '2023',
  },
  {
    title: 'Social Media Platform',
    description: 'Social platform design focusing on community engagement',
    image: 'https://source.unsplash.com/random/800x600?social',
    categories: ['Web', 'Mobile', 'Social'],
    year: '2022',
  },
  {
    title: 'Healthcare App',
    description: 'Patient-centric healthcare application for remote consultations',
    image: 'https://source.unsplash.com/random/800x600?health',
    categories: ['Mobile', 'Healthcare', 'UI/UX'],
    year: '2022',
  },
  {
    title: 'Smart Home Interface',
    description: 'IoT control interface for smart home devices',
    image: 'https://source.unsplash.com/random/800x600?smart,home',
    categories: ['IoT', 'UI/UX', 'Mobile'],
    year: '2023',
  },
  {
    title: 'Financial Services Platform',
    description: 'Banking and investment platform with focus on security and usability',
    image: 'https://source.unsplash.com/random/800x600?finance',
    categories: ['Web', 'Finance', 'Enterprise'],
    year: '2022',
  },
];

const allCategories = Array.from(
  new Set(projects.flatMap((project) => project.categories))
);

const Projects = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.categories.includes(selectedCategory))
    : projects;

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          component={motion.h1}
          variant="h2"
          align="center"
          gutterBottom
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          A collection of my design work across various industries
        </Typography>

        {/* Category Filter */}
        <Box sx={{ mb: 6 }}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 1 }}
          >
            <Chip
              label="All"
              onClick={() => setSelectedCategory(null)}
              color={selectedCategory === null ? 'primary' : 'default'}
              sx={{ m: 0.5 }}
            />
            {allCategories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
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
                  height="240"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                    {project.categories.map((category) => (
                      <Chip
                        key={category}
                        label={category}
                        size="small"
                        sx={{ mb: 1 }}
                      />
                    ))}
                    <Chip
                      label={project.year}
                      size="small"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 