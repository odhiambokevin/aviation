import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

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
  <Route element={<AppLayout />}>
    <Route path='/' element={<Home />} errorElement={<NotFound />} />
    <Route path='/blogs' element={<Blog />} errorElement={<NotFound />} />
  </Route>
  ));


function App() {
  return (
    <RouterProvider router={router} />    
  );
}

export default App;


