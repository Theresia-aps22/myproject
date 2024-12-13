import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import MusicCard from '../../components/Music/musicCard';
import React, { useState, useEffect } from 'react';
import { fetchRandomTracks } from './service.jsx';
import FavoritesProvider from '../../context/favoriteSongContext.jsx';

export default function RandomTracks() {
  const [tracks, setTracks] = useState([]); // État pour les morceaux
  const [loading, setLoading] = useState(true); // État de chargement
  const [error, setError] = useState(null); // État pour les erreurs

  // Vérifier si les morceaux sont dans le localStorage
  const getTracksFromLocalStorage = () => {
    const savedTracks = localStorage.getItem('tracks');
    if (savedTracks) {
      return JSON.parse(savedTracks);
    }
    return null;
  };

  // Fonction pour récupérer les morceaux
  const loadTracks = async () => {
    try {
      const savedTracks = getTracksFromLocalStorage();
      
      if (savedTracks) {
        setTracks(savedTracks);
        setLoading(false);
      } else {
        const fetchedTracks = await fetchRandomTracks();
        setTracks(fetchedTracks);
        localStorage.setItem('tracks', JSON.stringify(fetchedTracks)); // Sauvegarder dans le localStorage
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTracks();
  }, []);

  if (loading) {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
          backgroundColor: '#fff0',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        <CircularProgress />
        <Typography variant="body1" color="textSecondary" sx={{ marginTop: 2 }}>
          Loading tracks...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
          backgroundColor: '#fff0',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        backgroundColor: '#fff0',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography variant="subtitle1" color="textSecondary" sx={{ marginBottom: 2 }}>
        Discover your favorite music genres
      </Typography>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap', // Permet aux cartes de se répartir sur plusieurs lignes
        justifyContent: 'center', // Centrer les cartes dans le conteneur
        gap: '16px', // Ajouter un écart entre les cartes
      }}>
        {tracks.length > 0 ? (
          tracks.map((track) => (
            <FavoritesProvider key={track.id}>
              <MusicCard track={track} />
            </FavoritesProvider>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary">No tracks available.</Typography>
        )}
      </div>
    </Container>
  );
}
