import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  LinearProgress,
  Stack,
  Avatar,
  Chip,
  Button,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'UX Research', level: 90 },
  { name: 'Prototyping', level: 88 },
  { name: 'User Testing', level: 85 },
  { name: 'Design Systems', level: 92 },
  { name: 'Frontend Development', level: 80 },
];

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'InVision',
  'Principle',
  'React',
  'Material-UI',
  'HTML/CSS',
  'JavaScript',
  'TypeScript',
];

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column - Personal Info */}
          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Stack spacing={3} alignItems="center">
                <Avatar
                  src="https://source.unsplash.com/random/200x200?portrait"
                  alt="Yakun Jin"
                  sx={{ width: 200, height: 200, mb: 2 }}
                />
                <Typography variant="h4" gutterBottom align="center">
                  Yakun Jin
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  align="center"
                  gutterBottom
                >
                  UI/UX Designer & Developer
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:your.email@example.com"
                  >
                    Contact
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                  >
                    Resume
                  </Button>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <IconButton
                    component="a"
                    href="https://linkedin.com"
                    target="_blank"
                    color="primary"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com"
                    target="_blank"
                    color="primary"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Right Column - Skills & Experience */}
          <Grid item xs={12} md={8}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography paragraph>
                I'm a passionate UI/UX designer with over 5 years of experience in creating
                beautiful and functional digital experiences. My approach combines
                user-centered design principles with modern aesthetics to deliver
                products that users love.
              </Typography>
              <Typography paragraph>
                With a background in both design and development, I bridge the gap
                between creative vision and technical implementation, ensuring that
                designs not only look great but are also feasible to build.
              </Typography>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Skills
              </Typography>
              <Grid container spacing={2}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} key={skill.name}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Typography variant="body2" gutterBottom>
                        {skill.name}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Tools & Technologies
              </Typography>
              <Box sx={{ mt: 2 }}>
                {tools.map((tool, index) => (
                  <Chip
                    key={tool}
                    label={tool}
                    sx={{ m: 0.5 }}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 