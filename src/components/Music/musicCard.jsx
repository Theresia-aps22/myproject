import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MusicCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', borderRadius: 2, boxShadow: 3, overflow: 'hidden', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 2 }}>
        <CardContent sx={{ flex: '1 0 auto', paddingBottom: 0 }}>
          <Typography component="div" variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
            Live From Space
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: theme.palette.text.secondary, marginBottom: 1 }}
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, paddingTop: 1 }}>
          <IconButton aria-label="previous" sx={{ color: theme.palette.text.primary, '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" sx={{ color: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            <PlayArrowIcon sx={{ height: 40, width: 40 }} />
          </IconButton>
          <IconButton aria-label="next" sx={{ color: theme.palette.text.primary, '&:hover': { backgroundColor: theme.palette.action.hover } }}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: 151,
          borderRadius: 1,
          objectFit: 'cover',
        }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
