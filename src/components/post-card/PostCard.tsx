import { Flex, Text, Link, Box, Divider } from '@chakra-ui/react';

export const PostCard = () => {
  return (
    <Flex bgColor="gray.200" p={4} alignItems="center" mb={4}>
      <Text color="gray.500" mr={2}>
        1
      </Text>
      <Divider borderColor="gray.500" orientation="vertical" width="2" height="10"></Divider>
      <Box>
        <Link href="/" fontWeight="bold" cursor="pointer">
          Hi, Im looking for a COBOL developer
        </Link>
        <Flex
          alignItems={{ md: 'center' }}
          color="gray.500"
          direction={{ base: 'column', md: 'row' }}
        >
          <Text textDecoration="underline" mr={2} cursor="pointer">
            2 Comments
          </Text>
          <Text mr={2} display={{ base: 'none', md: 'block' }}>
            &middot;
          </Text>
          <Text>
            4 hrs ago by <Link textDecoration="underline"> Marcus Vinícius</Link>, Front end
            Developer
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
