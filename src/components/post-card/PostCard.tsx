import { Box, Flex, Text, Link } from '@chakra-ui/react';

export const PostCard = () => {
  return (
    <Box bgColor="gray.200" p={4}>
      <Link href="/" fontWeight="bold" cursor="pointer">
        Hi, Im looking for a COBOL developer
      </Link>
      <Flex alignItems="center" color="gray.500">
        <Text textDecoration="underline" mr={2} cursor="pointer">
          2 Comments
        </Text>
        <Text mr={2}> &middot; </Text>
        <Text>
          4 hrs ago by <Link textDecoration="underline"> Marcus Vinícius</Link>, Front end Developer
        </Text>
      </Flex>
    </Box>
  );
};
