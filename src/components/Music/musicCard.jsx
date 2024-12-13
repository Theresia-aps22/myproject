import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Box from '@mui/material/Box';

import LOGO from "../../utils/images/music.jpg"; // Remplacer par l'image
import { useHistory } from 'react-router-dom';

export default function MusicCard({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [audio] = useState(new Audio(track.audio));  // Créer un objet Audio
  const [favoriteTracks, setFavoriteTracks] = useState(
    JSON.parse(localStorage.getItem('favoriteTracks')) || []
  );
  const [savedTracks, setSavedTracks] = useState(
    JSON.parse(localStorage.getItem('savedTracks')) || []
  );

  useEffect(() => {
    setIsFavorite(favoriteTracks.some(favTrack => favTrack.id === track.id));
    setIsSaved(savedTracks.some(savedTrack => savedTrack.id === track.id));
  }, [favoriteTracks, savedTracks, track.id]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFavoriteToggle = () => {
    let updatedFavorites = [...favoriteTracks];

    if (isFavorite) {
      updatedFavorites = updatedFavorites.filter(favTrack => favTrack.id !== track.id);
    } else {
      updatedFavorites.push(track);
    }

    setFavoriteTracks(updatedFavorites);
    localStorage.setItem('favoriteTracks', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  const handleSaveToggle = () => {
    let updatedSavedTracks = [...savedTracks];

    if (isSaved) {
      updatedSavedTracks = updatedSavedTracks.filter(savedTrack => savedTrack.id !== track.id);
    } else {
      updatedSavedTracks.push(track);
    }

    setSavedTracks(updatedSavedTracks);
    localStorage.setItem('savedTracks', JSON.stringify(updatedSavedTracks));
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    audio.onended = () => {
      setIsPlaying(false);
    };
  }, [audio]);

  return (
    <Card sx={{ maxWidth: 320, mb: 2 }}>
      <CardMedia
        component="img"
        sx={{
          height: 140,
          objectFit: 'cover',
          filter: 'brightness(50%)',
        }}
        image={LOGO}
        alt="Album cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {track.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {track.artist_name}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handlePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton onClick={handleFavoriteToggle} sx={{ color: isFavorite ? 'red' : 'black' }}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton onClick={handleSaveToggle} sx={{ color: isSaved ? 'yellow' : 'black' }}>
            {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
