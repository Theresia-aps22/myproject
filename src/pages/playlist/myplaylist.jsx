import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import '../../utils/styles/playlist.css';

export default function TrackList() {
  const [showPopup, setShowPopup] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [showMenuIndex, setShowMenuIndex] = useState(null);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaylists([...playlists, playlistName]);
    setPlaylistName('');
    closePopup();
  };

  const toggleMenu = (index) => {
    setShowMenuIndex(showMenuIndex === index ? null : index);
  };

  return (
    <div className='playlist-container'>
      <h1 className='playlist-title'><LibraryMusicIcon/> My Playlist</h1>

      <div className="create-playlist">
        <button className="btn create-playlist-btn" onClick={openPopup}>
          Create Playlist
          <AddIcon className="addicon" />
        </button>
      </div>

      <Link to="/liked" className="track-section-card">
        <h2><FavoriteBorderIcon /> Liked Songs</h2><br />
        <p>9 available songs</p>
      </Link>

      <Link to="/saved" className="track-section-card">
        <h2><BookmarkBorderIcon/> Saved Songs</h2><br />
        <p>8 available songs</p>
      </Link>

      {playlists.map((name, index) => (
        <Link to={`/playlist/${index}?name=${encodeURIComponent(name)}`} key={index} className="track-section-card">
          <div className="card-header">
            <h2><MusicNoteIcon /> {name}</h2>
            <button className='delete-btn' onClick={(e) => { e.preventDefault(); toggleMenu(index); }}>
              <MoreVertIcon />
            </button>
          </div>
          <p>Newly created playlist</p>

          {showMenuIndex === index && (
            <div className="context-menu">
              <p onClick={() => console.log("Edit clicked")}>Edit</p>
              <p onClick={() => console.log("Delete clicked")}>Delete</p>
            </div>
          )}
        </Link>
))}


      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="track-section-card popup-content" onClick={(e) => e.stopPropagation()}>
            <h3><LibraryMusicIcon/> Create Playlist</h3>
            <form onSubmit={handleSubmit}>
              <label className='popup-label'>
                Playlist Name:
                <input
                  type="text"
                  value={playlistName}
                  onChange={(e) => setPlaylistName(e.target.value)}
                  required
                  className="popup-input"
                />
              </label>
              <div>
                <button type="submit" className="btn">Create</button>
                <button type="button" className="btn" onClick={closePopup}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
