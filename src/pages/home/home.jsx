// HomePage.js
import * as React from 'react';
import { Container, Typography, Card } from '@mui/material';
import { styled } from '@mui/system';
import SongCards from  '../../components/RecentPLay/recentPlayCard.jsx'
import FavoriteSongsCard from '../../components/songAction/favoriteSong'
import SavedSongsCard from '../../components/songAction/savedSong.jsx'
import FavoritesProvider from '../../context/favoriteSongContext.jsx';


import Illustration from '../../utils/images/music_illustration.png'

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));

export default function HomePage() {
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>Welcome to E-HAINO Music!</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Discover your favorite music genres and artists!
      </Typography>
      <Card>
        <img alt="Music" src={Illustration} width="30%"/>
      </Card>
      <FavoritesProvider>
        <FavoriteSongsCard/>
      </FavoritesProvider>
      <SavedSongsCard/>
    </StyledContainer>
  );
}
