import {createBrowserRouter,
        createRoutesFromElements,
        RouterProvider,
        Route, Outlet,
        Redirect, useLocation
      }
        from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';
import Footer from './components/Footer';
import Topbar from './dashboard/Topbar';
import Sidebarnav from './dashboard/Sidebarnav';
import Dashboard from './dashboard';
import Staff from './dashboard/Staff';
import Incident from './dashboard/Incidents';
import Incidentraw from './dashboard/Incidentraw';
// import Contacts from './dashboard/Contacts';
import Line from './dashboard/Line';
import FAQ from './dashboard/FAQ';
import Geography from './dashboard/Geography';
import Event from './dashboard/Event';
import Verification from './dashboard/Verification';
import Signupdash from './dashboard/Signupdash';
import Signindash from './dashboard/Signindash';
import ScrollToTop from './ScrollToTop';
import {AuthRoutes} from './dashboard/authRoutes';
import {useSelector} from "react-redux";
export const AppLayout = ()=>{
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
};

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
  <Route path='/' element={<AppLayout />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path='blogs' element={<Blog />} />
  </Route>
  {/* Dashboard Routes */}
  <Route path='projects/airport-wildlife-management' element={<DashLayout />} errorElement={<NotFound />}>
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
      <Route path='incidentsl1' element={<Incident/>} />
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


