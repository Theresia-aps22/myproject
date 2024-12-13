import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArtistCard from '../ArtistCard'
import MusicCard from "../Music/musicCard";
import Image from "../../utils/images/classic.jpg";
import Button from '@mui/material/Button';


const artists = [
  { name: 'Artiste 1', image:Image, followers: '5k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
  { name: 'Artiste 2', image: Image, followers: '10k' },
];



export default function SongCards() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
      <RecentlyPlayedCard />
      <FollowedArtistsCard artists={artists} />
      <FavoriteSongsCard />
    </Box>
  );
}

const cardStyleArtist = {
  // maxWidth: '800px',
  margin: '0 auto',
  padding: '16px',
  boxShadow: 3,
  borderRadius: 2,
};

const titleStyleArtist = {
  textAlign: 'center',
  marginBottom: '16px',
};


function FollowedArtistsCard({ artists }) {
  const [visibleArtistsCount, setVisibleArtistsCount] = useState(5);

  const handleShowMore = () => {
    setVisibleArtistsCount(prevCount => prevCount + 10); // Augmente par 10 à chaque clic
  };

  const handleShowLess = () => {
    setVisibleArtistsCount(prevCount => Math.max(prevCount - 10, 5)); // Diminue par 10, mais ne descend pas en dessous de 5
  };

  return (
    <Card sx={cardStyleArtist}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={titleStyle}>
          ⭐ Artistes suivis
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {artists.slice(0, visibleArtistsCount).map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
          {visibleArtistsCount < artists.length ? (
            <Button variant="contained" color="primary" onClick={handleShowMore}>
              Voir plus
            </Button>
          ) : (
            <Button variant="outlined" color="secondary" onClick={handleShowLess}>
              Voir moins
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}


function FavoriteSongsCard() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={titleStyle}>
          ❤️ Chansons adorées
        </Typography>
        {/* <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard /> */}
      </CardContent>
    </Card>
  );
}

// Styles généraux des cartes
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

// Styles pour le titre de chaque section
const titleStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#c836c8',
  borderBottom: '2px solid #4a4a59',
  paddingBottom: '4px',
  marginBottom: '12px',
};

function RecentlyPlayedCard() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={titleStyle}>
          🎧 Chansons récemment écoutées
        </Typography>
        {/* <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard /> */}
      </CardContent>
    </Card>
  );
}

