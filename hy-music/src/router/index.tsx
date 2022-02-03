import React from 'react';
import { useRoutes } from 'react-router-dom';
import Discover from '../pages/Discover';
import Friend from '../pages/Friend';
import Mine from '../pages/Mine';
import Player from '../pages/Player';

const renderRoutes = () => {
  return useRoutes([
    { path: '/', element: <Discover /> },
    {
      path: 'discover',
      element: <Discover />,
    },
    {
      path: 'mine',
      element: <Mine />,
    },
    {
      path: 'friend',
      element: <Friend />,
    },
    {
      path: 'player',
      element: <Player />,
    },
  ]);
};

export default renderRoutes;
