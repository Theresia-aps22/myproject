// CategorySection.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import IMG from '../../utils/images/hip_hop.jpg';
import IMG2 from '../../utils/images/rock.png';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: 'auto',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
  },
}));

const CategoryContainer = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
}));

export default function CategorySection() {
  return (
    <CategoryContainer>
      <Typography variant="h5" gutterBottom>Music Category</Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Card 1 - Hip Hop */}
        <Grid item>
          <StyledCard>
            <CardMedia
              component="img"
              height="140"
              image={IMG}
              alt="Hip Hop"
            />
            <CardContent>
              <Typography variant="h6">Hip Hop</Typography>
              <Typography variant="body2" color="textSecondary">
                Explore the latest and classic hits in Hip Hop.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Card 2 - Rock */}
        <Grid item>
          <StyledCard>
            <CardMedia
              component="img"
              height="140"
              image={IMG2}
              alt="Rock"
            />
            <CardContent>
              <Typography variant="h6">Rock</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive into the world of Rock music and iconic bands.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </CategoryContainer>
  );
}
