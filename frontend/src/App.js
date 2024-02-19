import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Dashboard from './dashboard';
import Incidentraw from './dashboard/Incidentraw';
import Incident from './dashboard/Incidents';
import Sidebarnav from './dashboard/Sidebarnav';
import Staff from './dashboard/Staff';
import Topbar from './dashboard/Topbar';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';
import { ColorModeContext, useMode } from "./theme";
// import Contacts from './dashboard/Contacts';
import ScrollToTop from './ScrollToTop';
import Event from './dashboard/Event';
import FAQ from './dashboard/FAQ';
import Geography from './dashboard/Geography';
import Line from './dashboard/Line';
import Signindash from './dashboard/Signindash';
import Signupdash from './dashboard/Signupdash';
import Verification from './dashboard/Verification';
import Verify from './dashboard/Verify';
import { AuthRoutes } from './dashboard/authRoutes';

export const DashLayout = ()=>{
  return(
    <div className="app">
      <ScrollToTop />
      <Sidebarnav />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  )
};

const router = createBrowserRouter(createRoutesFromElements(
<>

  {/* Dashboard Routes */}
  <Route path='/' element={<DashLayout />} errorElement={<NotFound />}>
    <Route index element={<Dashboard />} />
    <Route path='sign-up' element={<Signupdash />} />
    <Route path='sign-in' element={<Signindash />} />
    <Route path='dashboard' element={<Dashboard />} />
    <Route path='unauthorized' element={<Unauthorized />} />
    <Route path='faq' element={<FAQ/>} />
    {/*Routes accessed by logged in staff only */}
    <Route element={<AuthRoutes allowedDesignation={["wmanager","wcontrol","admin"]} />}>
      <Route path='line' element={<Line/>} />
      <Route path='geography' element={<Geography/>} />
      <Route path='events' element={<Event/>} />
    </Route>
    {/*Routes accessed by logged in satff with either admin or manager access level */}
    <Route element={<AuthRoutes allowedDesignation={["wmanager","admin"]} />}>
      <Route path='staff' element={<Staff />} />
      <Route path='incidents' element={<Incidentraw/>} />
      <Route path='incidents/:incidentid' element={<Verify/>} />
      <Route path='verification' element={<Incident/>} />
    </Route>
  </Route>
  <Route path='activate/:uid/:token' element={<Verification/>} />  
</>
  ));

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


