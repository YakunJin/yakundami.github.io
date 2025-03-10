import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'The Future of UI Design: Trends to Watch in 2024',
    excerpt:
      'Exploring emerging UI design trends that will shape the future of digital experiences, from AI-driven interfaces to immersive technologies.',
    image: 'https://source.unsplash.com/random/800x400?ui,future',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'UI Design',
  },
  {
    title: 'Creating Accessible Design Systems',
    excerpt:
      'A comprehensive guide to building inclusive design systems that work for everyone, with practical tips and real-world examples.',
    image: 'https://source.unsplash.com/random/800x400?accessibility',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Accessibility',
  },
  {
    title: 'The Psychology of Color in UX Design',
    excerpt:
      'Understanding how color choices impact user behavior and emotions, with case studies and research-backed insights.',
    image: 'https://source.unsplash.com/random/800x400?color,design',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'UX Design',
  },
  {
    title: 'Designing for Dark Mode: Best Practices',
    excerpt:
      'A detailed look at implementing effective dark mode designs, including color theory and contrast considerations.',
    image: 'https://source.unsplash.com/random/800x400?dark,mode',
    date: 'February 28, 2024',
    readTime: '7 min read',
    category: 'UI Design',
  },
];

const Blog = () => {
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
          Blog & Insights
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Thoughts and perspectives on UI/UX design, development, and industry trends
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={6}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                component={motion.div}
                whileHover={{
                  scale: 1.02,
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
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Chip
                      label={post.category}
                      size="small"
                      color="primary"
                    />
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      • {post.readTime}
                    </Typography>
                  </Stack>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                  >
                    {post.excerpt}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mt: 2 }}
                  >
                    <Avatar
                      src="https://source.unsplash.com/random/100x100?portrait"
                      alt="Author"
                      sx={{ width: 32, height: 32 }}
                    />
                    <Typography variant="subtitle2">
                      Yakun Jin
                    </Typography>
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

export default Blog; 