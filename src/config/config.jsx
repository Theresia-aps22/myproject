// Icons
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';

// Image for the avatar
import avatarImage from '../utils/images/classic.jpg';

// Navigation menu items
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Menu Navigation',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  // {
  //   segment: 'dashboard',
  //   title: 'Dashboard',
  //   icon: <BarChartIcon />,
  // },
  {
    segment: 'playlist',
    title: 'My Playlist',
    icon: <PlaylistPlayIcon />,
  },
  {
    segment: 'music',
    title: 'Music',
    icon: <HeadphonesIcon />,
  },
  {
    segment: 'artist',
    title: 'Artist',
    icon: <SpatialAudioOffIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'profile/view',
    title: 'Profile',
    icon: (
      <Avatar
        alt="User Avatar"
        src={avatarImage}
        sx={{ width: 30, height: 30, ml: 0 }}
      />
    ),
  },
  {
    segment: 'logout',
    title: 'Log Out',
    icon: <LogoutIcon />,
  },
];

export default NAVIGATION;
