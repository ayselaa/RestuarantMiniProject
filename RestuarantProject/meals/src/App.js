import Home from './components/HomePage/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../src/App.css'


const router = createBrowserRouter([
    { path: "/", element: <Home/> },
]);

function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
