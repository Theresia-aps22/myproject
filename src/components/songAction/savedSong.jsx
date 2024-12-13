import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardActions, CardContent, IconButton, Box } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MusicCard from '../Music/musicCard';

export default function SavedSongsCard() {
  const [savedTracks, setSavedTracks] = useState(
    JSON.parse(localStorage.getItem('savedTracks')) || []
  );

  // Fonction pour gérer le toggle de l'enregistrement
  const handleSaveToggle = (track) => {
    let updatedSavedTracks = [...savedTracks];

    if (updatedSavedTracks.some(savedTrack => savedTrack.id === track.id)) {
      updatedSavedTracks = updatedSavedTracks.filter(savedTrack => savedTrack.id !== track.id);  // Retirer du tableau
    } else {
      updatedSavedTracks.push(track);  // Ajouter au tableau
    }

    // Mettre à jour le state et localStorage
    setSavedTracks(updatedSavedTracks);
    localStorage.setItem('savedTracks', JSON.stringify(updatedSavedTracks));
  };

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
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '20px' }}>
        🎶 Saved Songs
      </Typography>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
        justifyItems: 'center',
      }}>
        {savedTracks.length > 0 ? (
          savedTracks.map((track) => (
            <MusicCard key={track.id} track={track} />
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No saved songs yet.
          </Typography>
        )}
      </div>
    </Container>
  );
}
