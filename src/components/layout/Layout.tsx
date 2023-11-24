import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <Box as="main" py="16" px={{ base: 16, xl: 96 }}>
        {children}
      </Box>
      <footer></footer>
    </Box>
  );
};
