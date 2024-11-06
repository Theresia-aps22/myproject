//  Icons
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import MoodIcon from '@mui/icons-material/Mood';


const NAVIGATION = [
    {
      kind: 'header',
      title: 'Menu navigation',
    },
    {
      segment: 'home',
      title: 'Home',
      icon: <HomeIcon/>,
    },
    {
      segment: 'playlist',
      title: 'My Playlist',
      icon: <PlaylistPlayIcon />,
    },
    {
      segment: 'music',
      title: 'Music ',
      icon: <HeadphonesIcon />,
    },
    {
      segment: 'Artist',
      title: 'Artist',
      icon: <SpatialAudioOffIcon />,
    }, 
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Analytics',
    },
    {
      segment: 'reports',
      title: 'Reports',
      icon: <BarChartIcon />,
      children: [
        {
          segment: 'sales',
          title: 'Sales',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'traffic',
          title: 'Traffic',
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: 'integrations',
      title: 'Integrations',
      icon: <LayersIcon />,
    },
  ];

  export default NAVIGATION
  