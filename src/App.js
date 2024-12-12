import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/auth/Signin';
import SignUp from './pages/auth/Signup';
import LikedSong from './pages/song/LikedSong.jsx';
import ArtistDetails from './pages/artist/artistsDetails.jsx';
import SavedSong from './pages/song/SavedSong.jsx';
import NewSong from './pages/song/NewSong.jsx';

  function App() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/liked" element={<LikedSong />} />
            <Route path="/saved" element={<SavedSong />} />
            <Route path="/artist/:artistId" element={<ArtistDetails />} />
            <Route path="/playlist/:playlistId" element={<NewSong />} />
          </Routes>
        </Router>
      </div>
    );
  }

  export default App;
