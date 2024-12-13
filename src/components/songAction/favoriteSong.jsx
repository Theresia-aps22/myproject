import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MusicCard from "../Music/musicCard";

function FavoriteSongsCard() {
  const [favoriteTracks, setFavoriteTracks] = useState([]);

  // Charger les morceaux favoris depuis localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteTracks')) || [];
    setFavoriteTracks(storedFavorites);
  }, []);

  const cardStyle = {
    background: '#fff0',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    },
    p: 2,
    color: 'black',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#c836c8',
    borderBottom: '2px solid #4a4a59',
    paddingBottom: '4px',
    marginBottom: '12px',
  };

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={titleStyle}>
          ❤️ Loved Songs
        </Typography>
        <div style={{
            display: 'flex',
            // flexWrap: 'wrap', // Permet aux cartes de se répartir sur plusieurs lignes
            justifyContent: 'center', // Centrer les cartes dans le conteneur
            gap: '16px', // Ajouter un écart entre les cartes
        }}>
            {favoriteTracks.length > 0 ? (
            favoriteTracks.map((track) => (
                <MusicCard key={track.id} track={track} />
            ))
            ) : (
            <Typography variant="body2">No favorite tracks yet.</Typography>
            )}
        
        </div>
      </CardContent>
    </Card>
  );
}

export default FavoriteSongsCard;
