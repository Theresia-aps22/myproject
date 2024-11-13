import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import logoEhaino from "../../utils/images/icon_e-haino.png";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Import Play icon
import PauseIcon from '@mui/icons-material/Pause'; // Import Pause icon
import "../../utils/styles/likedSong.css";
import { MusicNote } from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function NewSong() {
  const { playlistId } = useParams();
  const location = useLocation();
  const [songs, setSongs] = useState([]);
  const [jamendoSongs, setJamendoSongs] = useState([]);
  const [showSongSelection, setShowSongSelection] = useState(false);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playingSong, setPlayingSong] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const playlistName = searchParams.get("name") || `Playlist ${playlistId}`;

  useEffect(() => {
    fetch('https://api.jamendo.com/v3.0/tracks?client_id=08f37671')
      .then(response => response.json())
      .then(data => {
        setJamendoSongs(data.results);
      })
      .catch(error => console.error("Erreur lors de la récupération des chansons :", error));
  }, []);

  const handleAddSongClick = () => {
    setShowSongSelection(true);
  };

  const handleCheckboxChange = (song) => {
    if (selectedSongs.includes(song)) {
      setSelectedSongs(selectedSongs.filter((s) => s !== song));
    } else {
      setSelectedSongs([...selectedSongs, song]);
    }
  };

  const handleAddSelectedSongs = () => {
    const newSongs = selectedSongs.filter((song) => !songs.some((existingSong) => existingSong.id === song.id));
    setSongs([...songs, ...newSongs]);
    setSelectedSongs([]);
    setShowSongSelection(false);
  };

  const handleCloseDialog = () => {
    setShowSongSelection(false);
  };

  const handlePlayPause = (song) => {
    if (playingSong === song) {
      setPlayingSong(null); // Pause if the song is already playing
    } else {
      setPlayingSong(song); // Play the selected song
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <header className="header">
        <Box display="flex" alignItems="center" padding="16px" color="white">
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
          <Typography variant="h4" className="liked-song-title">
            <MusicNote /> {playlistName}
          </Typography>
        </Box>

        {/* Render Playlist Songs */}
        <Box className="song-list">
          {songs.length === 0 ? (
            <Typography variant="body1">No songs in this playlist</Typography>
          ) : (
            <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
              {songs.map((song, index) => (
                <Box key={index} className="song-card" display="flex" alignItems="center" sx={{ mb: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 40, height: 50, borderRadius: 1, mr: 1 }}
                    image={song.album_image}
                    alt="Album cover"
                  />
                  <Box className="song-details">
                    <Typography variant="body1" fontWeight="bold" className="song-title" noWrap>{song.name}</Typography>
                    <Typography variant="caption" className="song-artist" noWrap>{song.artist_name}</Typography>
                  </Box>
                  <Box className="controls">
                    <IconButton
                      onClick={() => handlePlayPause(song)}
                      sx={{ color: 'white' }}
                    >
                      {playingSong === song ? <PauseIcon /> : <PlayArrowIcon />} {/* Use icons */}
                    </IconButton>
                    {playingSong === song && (
                      <audio autoPlay>
                        <source src={song.audio} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Button variant="contained" color="primary" onClick={handleAddSongClick} sx={{ mt: 2 }}>
          Add Song
        </Button>

        {/* Dialog Modal for Song Selection */}
        <Dialog open={showSongSelection} onClose={handleCloseDialog}>
          <DialogTitle>Select Jamendo Songs to Add</DialogTitle>
          <DialogContent>
            <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
              {jamendoSongs.map((jamendoSong) => (
                <Box key={jamendoSong.id} display="flex" alignItems="center" sx={{ mb: 1 }}>
                  <Checkbox
                    checked={selectedSongs.includes(jamendoSong)}
                    onChange={() => handleCheckboxChange(jamendoSong)}
                    color="primary"
                    disabled={songs.some((existingSong) => existingSong.id === jamendoSong.id)}
                  />
                  <Typography variant="body1" noWrap>{jamendoSong.name} by {jamendoSong.artist_name}</Typography>
                </Box>
              ))}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
            <Button onClick={handleAddSelectedSongs} color="secondary">Add Selected Songs</Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
