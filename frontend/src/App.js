import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet, Redirect, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Header from './components/Header';
import NotFound from './pages/NotFound';
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

  <Route path='projects/:slug' element={<DashLayout />} errorElement={<NotFound />}>
    <Route index element={<Dashboard />} />
    <Route path='dashboard' element={<Dashboard />} />
    <Route path='staff' element={<Staff />} />
    <Route path='authentication/sign-up' element={<Signupdash />} />
    <Route path='authentication/sign-in' element={<Signindash />} />
    <Route path='incidents' element={<Incident/>} />
    <Route path='incidentsl1' element={<Incidentraw/>} />
    <Route path='faq' element={<FAQ/>} />
    <Route path='line' element={<Line/>} />
    <Route path='geography' element={<Geography/>} />
    <Route path='events' element={<Event/>} />
    <Route path='verification' element={<Verification/>} />
  </Route>
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


