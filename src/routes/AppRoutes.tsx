import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, createPost } from '../pages';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create" Component={createPost} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
