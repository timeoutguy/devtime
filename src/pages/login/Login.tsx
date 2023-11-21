import { Box, FormControl, FormLabel, Text } from '@chakra-ui/react';
import React from 'react';

export const Login: React.FC = () => {
  return (
    <Box justifyContent="center" alignItems="center" display="flex" p={4}>
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
        Access Your Account
      </Text>
      <FormControl>
        <FormLabel> </FormLabel>
      </FormControl>
    </Box>
  );
};
