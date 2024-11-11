// HomePage.js
import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CategorySection from '../../components/Category/categorySection';
import MusicCardListForm from '../../components/Music/musicList';
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));

export default function HomePage() {
  return (
    <StyledContainer>
      {/* <Typography variant="h4" gutterBottom>Welcome to E-HAINO Music!</Typography> */}
      <Typography variant="subtitle1" color="textSecondary">
        Discover your favorite music genres
      </Typography>
      <CategorySection /> 
      <MusicCardListForm/>
    </StyledContainer>
  );
}
