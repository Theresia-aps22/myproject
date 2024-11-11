import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MusicCard from "../Music/musicCard";
import LOGO from "../../utils/images/classic.jpg";

const artists = [
  { name: 'Artist 1', image: LOGO },
  { name: 'Artist 2', image: LOGO },
];

export default function SongCards() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3 }}>
      <RecentlyPlayedCard />
      <FollowedArtistsCard artists={artists} />
      <FavoriteSongsCard />
    </Box>
  );
}

function RecentlyPlayedCard() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={titleStyle}>
          🎧 Chansons récemment écoutées
        </Typography>
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </CardContent>
    </Card>
  );
}

function FollowedArtistsCard({ artists }) {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={titleStyle}>
          ⭐ Artistes suivis
        </Typography>
        {artists.map((artist, index) => (
          <MusicCard key={index} />
        ))}
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
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
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
