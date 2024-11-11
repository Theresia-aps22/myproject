import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CardMedia from '@mui/material/CardMedia';

import LOGO from "../../utils/images/classic.jpg";

export default function MusicCard() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#c496c4', 
        borderRadius: '5px',
        color: 'black',
        p: 1,
        width: '100%',
        mb: 1,
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 40,
          height: 50,
          borderRadius: 1,
          mr: 1,
        }}
        image={LOGO}
        alt="Album cover"
      />
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <Typography
          variant="body2"
          noWrap
          sx={{
            fontWeight: 'bold',
          }}
        >
          Clearest Blue (Gryffin Remix)
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap>
          CHVRCHES
        </Typography>
      </Box>
      <IconButton onClick={handlePlayPause} sx={{ color: 'white' }}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <IconButton onClick={handleFavoriteToggle} sx={{ color: isFavorite ? 'red' : 'white' }}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <IconButton onClick={handleSaveToggle} sx={{ color: isSaved ? 'yellow' : 'white' }}>
        {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </IconButton>
    </Box>
  );
}
