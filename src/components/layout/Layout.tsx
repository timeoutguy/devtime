import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

import { Navbar } from '../index';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box as="main" py="16" px={{ base: 16, xl: 96 }}>
        {children}
      </Box>
      <footer></footer>
    </Box>
  );
};
