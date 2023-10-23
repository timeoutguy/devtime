import { Box, Flex, Input, InputGroup, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { Editor } from '../../components/editor';

export const CreatePost: React.FC = () => {
  return (
    <Box>
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
        Create a new post
      </Text>
      <InputGroup mb={4}>
        <Input placeholder="Title" />
      </InputGroup>
      <Box data-color-mode="light" mb={4}>
        <Editor />
      </Box>
      <Flex justifyContent="flex-end" alignItems="center">
        <Link href="/">
          <button className="text-gray-600 px-4 py-1 mr-2 hover:bg-gray-200 rounded">Cancel</button>
        </Link>
        <button className="bg-charcoal text-white px-4 py-1 rounded font-bold"> Publish </button>
      </Flex>
    </Box>
  );
};
