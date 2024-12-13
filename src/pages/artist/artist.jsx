import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import ArtistCard from '../../components/ArtistCard/index.jsx';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { fetchTopArtists, fetchArtistTopTracks } from "../playlist/utils/fetchers.js";
import "../../utils/styles/artist.css";
import defaultImage from '../../utils/images/icon_e-haino.png';

export default function Artist() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [followedArtists, setFollowedArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const artistData = await fetchTopArtists(20);
        const artistsWithTrackCount = await Promise.all(
          artistData.map(async (artist) => {
            const tracks = await fetchArtistTopTracks(artist.id);
            return { ...artist, trackCount: tracks.length };
          })
        );
        setArtists(artistsWithTrackCount);
      } catch (err) {
        setError('Erreur lors de la récupération des artistes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getArtists();
  }, []);

  // Fonction pour gérer le suivi d'un artiste
  const handleFollow = (artistId) => {
    setFollowedArtists((prevFollowedArtists) => {
      if (prevFollowedArtists.includes(artistId)) {
        return prevFollowedArtists.filter((id) => id !== artistId); // Désabonner
      } else {
        return [...prevFollowedArtists, artistId]; // Abonner
      }
    });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box sx={{ overflow: 'hidden', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        All Artists
      </Typography>
      <Grid container spacing={2}>
        {(loading ? Array.from(new Array(20)) : artists).map((artist, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5, position: 'relative' }}>
              {loading ? (
                <>
                  <Skeleton variant="rectangular" width={210} height={118} />
                  <Skeleton width="60%" />
                </>
              ) : (
                <>

            <Box sx={{ pr: 2 }}>
              <ArtistCard key={index} artist={artist} />
            </Box>
                </>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
