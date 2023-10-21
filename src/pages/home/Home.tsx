import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const Home: React.FC = () => {
  return (
    <Box p="16">
      <Flex justifyContent="center" alignItems="center" textAlign="center" direction="column">
        <Text as="h1" fontSize="6xl" className="font-bold">
          <TypeAnimation sequence={['DevTime']} cursor={false} />
        </Text>
        <Text as="h2" fontSize="2xl" mb={8}>
          A community by developers for developers 💻
        </Text>
      </Flex>
    </Box>
  );
};
