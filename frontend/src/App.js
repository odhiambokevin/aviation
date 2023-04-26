import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet, Redirect, useLocation } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { useState, useEffect, useMemo } from "react";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "./components/VuiBox";

// Vision UI Dashboard React example components
import Sidenav from "./examples/Sidenav";

// Vision UI Dashboard React themes
import theme from "./assets/theme";
// import themeRTL from "./assets/theme/theme-rtl";
import { useVisionUIController, setMiniSidenav } from "./context";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import SignIn from "./layouts/authentication/sign-in";
import SignUp from "./layouts/authentication/sign-up";
import Dashboard from "./layouts/dashboard";
import routes from "./routes";

export const AppLayout = ()=>{
  

  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
};

const router = createBrowserRouter(createRoutesFromElements(
<>
  <Route element={<AppLayout />} errorElement={<NotFound />}>
    <Route path='/' element={<Home />} />
      <Route path='blogs' element={<Blog />} />
  </Route>
  <Route path='projects/:slug' element={<Dashboard/>} />
  <Route path='authentication/sign-in' element={<SignIn/>} />
  <Route path='authentication/sign-up' element={<SignUp/>} />
</>
  ));

function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <ThemeProvider theme={theme}>
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand=""
            brandName="VISION UI FREE"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;


