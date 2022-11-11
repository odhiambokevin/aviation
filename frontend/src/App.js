import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Blog from './pages/Blog';
import Header from './components/Header';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Home />} errorElement={<NotFound />} />
  <Route path='/blogs' element={<Blog />} errorElement={<NotFound />} />
  </>
  ));


function App() {
  return (
    <RouterProvider router={router} />    
  );
}

export default App;


