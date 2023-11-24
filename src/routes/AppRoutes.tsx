import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout, Navbar } from '../components';
import { useAuth } from '../hooks/useAuth';
import { Home, CreatePost, Login, SignUp } from '../pages';

import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/create" element={<CreatePost />}></Route>
          </Route>
          <Route element={<ProtectedRoute redirectTo="/" isAllowed={!user} />}>
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={SignUp} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
