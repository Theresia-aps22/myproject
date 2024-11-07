  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import HomePage from './pages/HomePage';
  import SignIn from './pages/auth/Signin';
  import SignUp from './pages/auth/Signup';
  import ArtistDetails from './pages/artist/artistsDetails.jsx';


  function App() {
    return (
      <div className="App">
        <Router>
          
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/artist/:artistId" element={<ArtistDetails />} />


          </Routes>
        </Router>
      </div>
    );
  }

  export default App;
