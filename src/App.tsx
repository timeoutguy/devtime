import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import './App.scss';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  );
};

export default App;
