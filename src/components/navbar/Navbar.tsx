import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Tooltip } from '@chakra-ui/react';
import { ArrowLeftOnRectangleIcon, PlusIcon, UserIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { firebaseAuth } from '../../config';
import { useAuth } from '../../hooks/useAuth';

export const Navbar: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        auth.setUser(null);
        navigate('/');
      });
  };
  return (
    <Box as="nav" py={4} px={8} className="border-b-2 bg-charcoal" borderColor="gray.100">
      <Flex justifyContent="space-between" alignItems="center">
        <Link className="text-xl text-white hover:no-underline" to="/">
          DevTime
        </Link>
        <Box>
          {auth.user ? (
            <Flex justifyContent="center" alignItems="center" color="white">
              <Tooltip label="Create" aria-label="Create">
                <Link className="mr-4" to="/create">
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
                  <MenuItem color="red" _hover={{ bg: 'red.50' }} onClick={handleLogout}>
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-1"></ArrowLeftOnRectangleIcon>
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <Box className="text-white">
              <Link to="login" className="mr-4">
                Login
              </Link>
              <Link to="login">Sign Up</Link>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
