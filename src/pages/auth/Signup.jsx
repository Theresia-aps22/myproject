import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, TextField, Button, Grid, Card, CardContent, CardMedia, Container, Slider } from '@mui/material';
import { Search, AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

// Exemple de données de musique
const musicData = [
  { title: 'Blinding Lights', artist: 'The Weeknd', image: '/images/blinding-lights.jpg' },
  { title: 'Levitating', artist: 'Dua Lipa', image: '/images/levitating.jpg' },
  { title: 'Save Your Tears', artist: 'The Weeknd', image: '/images/save-your-tears.jpg' },
  // Ajoutez plus de données
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MusicStream
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ marginRight: 2 }}
            />
            <IconButton color="inherit">
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Bannières de carrousel */}
      <Box sx={{ marginTop: 3, overflow: 'hidden', position: 'relative' }}>
        <img src="/images/carousel-banner.jpg" alt="banner" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </Box>

      {/* Liste de musique recommandée */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>Recommended Music</Typography>
        <Grid container spacing={3}>
          {musicData.map((music, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={music.image}
                  alt={music.title}
                />
                <CardContent sx={{ flex: '1 0 auto', padding: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {music.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {music.artist}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Lecteur de musique en bas */}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#282828', padding: 2 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item>
            <img src="/images/blinding-lights.jpg" alt="song" style={{ width: 50, height: 50, borderRadius: '8px' }} />
          </Grid>
          <Grid item xs>
            <Typography variant="body2" color="white">Blinding Lights</Typography>
            <Typography variant="body2" color="text.secondary">The Weeknd</Typography>
          </Grid>
          <Grid item>
            <IconButton sx={{ color: 'white' }}>
              <Search />
            </IconButton>
          </Grid>
        </Grid>
        <Slider value={30} sx={{ color: 'white', marginTop: 1 }} />
      </Box>
    </Box>
  );
}
