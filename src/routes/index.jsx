import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

export default Router;
