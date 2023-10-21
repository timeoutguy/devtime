import {
  Avatar,
  Box,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from '@chakra-ui/react';
import { ArrowLeftOnRectangleIcon, PlusIcon, UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

export const Navbar: React.FC = () => {
  const userIsAuthenticated = () => {
    return true;
  };

  return (
    <Box as="nav" py={4} px={8} className="border-b-2 bg-charcoal" borderColor="gray.100">
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="/" fontSize="xl" color="white" _hover={{ textDecor: 'none' }}>
          DevTime
        </Link>
        <Box display={{ base: 'none', md: 'block' }}>
          {userIsAuthenticated() ? (
            <Flex justifyContent="center" alignItems="center" color="white">
              <Tooltip label="Create" aria-label="Create">
                <Link mr={4}>
                  <PlusIcon className="h-6 w-6" />
                </Link>
              </Tooltip>
              <Menu>
                <MenuButton>
                  <Avatar cursor="pointer" size="sm" icon={<UserIcon className="h-6 w-6" />} />
                </MenuButton>
                <MenuList color="black">
                  <MenuItem as="a" href="/">
                    Profile
                  </MenuItem>
                  <MenuItem as="a" href="/">
                    My posts
                  </MenuItem>
                  <MenuItem color="red" _hover={{ bg: 'red.50' }}>
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-1"></ArrowLeftOnRectangleIcon>
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Box className="text-white">
              <Link mr={4}>Login</Link>
              <Link>Sign Up</Link>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
