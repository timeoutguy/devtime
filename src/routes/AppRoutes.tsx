import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout, Navbar } from '../components';
import { Home, CreatePost, Login } from '../pages';

import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route element={<ProtectedRoute />}>
            <Route path="/create" element={<CreatePost />}></Route>
          </Route>
          <Route path="/login" Component={Login} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
