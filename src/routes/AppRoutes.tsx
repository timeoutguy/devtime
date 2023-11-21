import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout, Navbar } from '../components';
import { Home, CreatePost, Login } from '../pages';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/create" Component={CreatePost} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
