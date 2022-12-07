import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Crop from './pages/Crop';
import SignIn from "./layouts/authentication/sign-in";

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
  <Route element={<AppLayout />} errorElement={<NotFound />}>
    <Route path='/' element={<Home />} />
      <Route path='projects/airport-wildlife-management' element={<SignIn/>} />
      <Route path='projects/production-management-system' element={<Crop/>} />
      <Route path='blogs' element={<Blog />} />
  </Route>
  ));


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;


