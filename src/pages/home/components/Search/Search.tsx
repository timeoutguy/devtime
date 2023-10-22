import { Box, Flex, Text, InputGroup, Input, InputRightElement, Tooltip } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export const Search = () => {
  const [selectedOption, setSelectedOption] = useState('top');

  return (
    <Box mb={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text className="font-bold"> Posts </Text>
        <Flex>
          <Text
            onClick={() => setSelectedOption('top')}
            color={selectedOption === 'top' ? 'white' : 'gray.500'}
            className={selectedOption === 'top' ? 'bg-charcoal' : 'bg-none'}
            mr={1}
            cursor="pointer"
            px={4}
            py={2}
            borderRadius={50}
            transition="ease-in 0.3s"
          >
            Top
          </Text>
          <Text
            onClick={() => setSelectedOption('recent')}
            color={selectedOption === 'recent' ? 'white' : 'gray.500'}
            className={selectedOption === 'recent' ? 'bg-charcoal' : 'bg-none'}
            cursor="pointer"
            px={4}
            py={2}
            borderRadius={50}
            transition="ease-in 0.3s"
          >
            Recent
          </Text>
        </Flex>
      </Flex>
      <InputGroup>
        <Input type="text" placeholder="What are you looking for..." />
        <InputRightElement>
          <Tooltip label="Search" aria-label="Search" hasArrow={true} placement="right">
            <MagnifyingGlassIcon className="h-6 w-6 text-charcoal cursor-pointer" />
          </Tooltip>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
