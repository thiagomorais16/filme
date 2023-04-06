import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import Home from "./pages/Home/Home.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import './index.scss';
import {createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
      path:"",
      element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
