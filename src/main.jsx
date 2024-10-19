//import react
import * as React from "react";
import * as ReactDOM from "react-dom/client";

//import react router
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

//import gstyles
import './assets/index.css'

//import comps
import {NavBar} from "./pages/NavBar/NavBar"  
import {Home} from "./pages/Home/Home";
import {AboutUs} from "./pages/AboutUs/AboutUs";
import {Footer} from "./pages/Footer/Footer"
import ErrorPage from './pages/ErrorPage/ErrorPage'

const ComponentsWrapper = () =>{
  return(
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentsWrapper/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/nosotros',
        element: <AboutUs/>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
