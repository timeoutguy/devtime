import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { PostCard } from '../../components';

import { Search } from './components/Search';

export const Home: React.FC = () => {
  return (
    <Box py="16" px={{ base: 16, xl: 72 }}>
      <Flex
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        direction="column"
        mb={16}
      >
        <Text as="h1" fontSize="6xl" className="font-bold">
          <TypeAnimation sequence={['DevTime']} cursor={false} />
        </Text>
        <Text as="h2" fontSize="2xl" mb={8}>
          A community by developers for developers 💻
        </Text>
      </Flex>
      <Search />
      <PostCard></PostCard>
    </Box>
  );
};
