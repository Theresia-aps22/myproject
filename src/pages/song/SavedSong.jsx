import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CardMedia from '@mui/material/CardMedia';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import LOGO from "../../utils/images/classic.jpg";
import logoEhaino from "../../utils/images/icon_e-haino.png";
import "../../utils/styles/likedSong.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function LikedSong() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <header className="header">
        <Box display="flex" alignItems="center" padding="16px"  color="white">
          <Typography variant="h3" sx={{ flexGrow: 1, ml: 2 }}>My playlist</Typography>
          <CardMedia
            component="img"
            sx={{ width: 70, height: 70, borderRadius: '50%', ml: 2 }}
            image={logoEhaino}
            alt="App Logo"
          />
        </Box>
        <hr className='ligne' />
      </header>
      <div className="liked-song-container">
        <Box className="liked-song-header">
          <Link to="/home">
            <IconButton className="home-icon">
              <HomeIcon className="icon" fontSize="large" />
            </IconButton>
          </Link>
          <Typography variant="h4" className="liked-song-title"><BookmarkBorderIcon/> Saved Songs</Typography>
        </Box>
        <Box className="song-card">
          <CardMedia
            component="img"
            sx={{
              width: 40,
              height: 50,
              borderRadius: 1,
              mr: 1,
            }}
            className="song-logo"
            image={LOGO}
            alt="Album cover"
          />
          <Box className="song-details">
            <Typography variant="body1" className="song-title" noWrap>
              Clearest Blue (Gryffin Remix)
            </Typography>
            <Typography variant="caption" className="song-artist" noWrap>
              CHVRCHES
            </Typography>
          </Box>
          <Box className="controls">
            <IconButton onClick={handlePlayPause} className="control-button" sx={{ color: 'white' }}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
