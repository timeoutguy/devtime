import React from 'react';

import './App.css';
import Layout from './components/Layout';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
};

export default App;
