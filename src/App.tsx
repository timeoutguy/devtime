import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import './App.scss';
import { AuthProvider } from './contexts';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
