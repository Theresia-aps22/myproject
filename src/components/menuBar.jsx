import * as React from 'react';
import { extendTheme} from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Grid from '@mui/material/Grid2';
import Avatar from '@mui/material/Avatar';


// IMG
import Logo from "../utils/images/icon_e-haino.png";

// Page
import HomePage from '../pages/home/home';
import MusicPage from '../pages/music/music';
import PlaylistPage from '../pages/playlist/myplaylist';
import ArtistPage from '../pages/artist/artist';
import ArtistDashboard from './MusicChart/chart';
import Profile from '../pages/profile/viewProfile';
import ArtistProfile from '../components/ArtistCard/profile.jsx';


import NAVIGATION from '../config/config';
import avatarImage from '../utils/images/classic.jpg';


const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);
  const router = React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);

  return router;
}

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/home');
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: <img src={Logo} alt="E-HAINO" />,
        title: 'E-HAINO',
        avatar:<Avatar
          alt="User Avatar"
          src={avatarImage}
          sx={{ width: 30, height: 30, ml: 0 }}
        />
      }}
    >
      <DashboardLayout>
          <Grid container spacing={2}>
            {router.pathname === '/home' && <HomePage />}
            {router.pathname === '/music' && <MusicPage />}
            {router.pathname === '/playlist' && <PlaylistPage />}
<<<<<<< HEAD
            {router.pathname === '/Artist' && <ArtistPage />}
            {/* {router.pathname ==='/dashboard' && <ArtistDashboard/>} */}
=======
            {router.pathname === '/artist' && <ArtistPage />}
            {router.pathname ==='/dashboard' && <ArtistDashboard/>}
>>>>>>> 2af71ee548e3a6c0ffcfa2ce6d82318e7f11cad0
            {router.pathname === '/profile/view' && <Profile/>}
            {router.pathname === '/artist/profile/view' && <Profile/>}
          </Grid>
      </DashboardLayout>
    </AppProvider>
  );
}