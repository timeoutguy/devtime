import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import './App.scss';
import { Layout } from './components';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
