import * as React from 'react';
import { extendTheme} from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Grid from '@mui/material/Grid2';

// IMG
import Logo from "../utils/images/icon_e-haino.png";

// Page
import HomePage from '../pages/home/home';
import MusicPage from '../pages/music/music';

import NAVIGATION from '../config/config';


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
      }}
    >
      <DashboardLayout>
          <Grid container spacing={2}>
            {router.pathname === '/home' && <HomePage />}
            {router.pathname === '/music' && <MusicPage />}
          </Grid>
      </DashboardLayout>
    </AppProvider>
  );
}