import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { FormEvent, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import './styles.scss';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRelatedErrors = ['auth/invalid-email', 'auth/invalid-login-credentials'];
  const passwordRelatedErrors = ['auth/invalid-login-credentials'];

  const user = useAuth();

  const handleLogin = (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();

    user
      .authenticate(email, password)
      .then((userCredential) => {
        user.setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setLoginError(err.code);
        setIsLoading(false);
      });
  };

  return (
    <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column" p={4}>
      {user && <h1> {(user as any).photoUrl} </h1>}
      {loginError && <h1> {loginError} </h1>}
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
        Sign in
      </Text>
      <form onSubmit={handleLogin} className="flex flex-col w-96">
        <FormControl mb={4}>
          <FormLabel> E-mail </FormLabel>
          <Input
            type="email"
            placeholder="email@devtime.io"
            size="lg"
            onChange={(event) => setEmail(event.currentTarget.value)}
            isInvalid={emailRelatedErrors.includes(loginError)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel> Password </FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="**********"
              size="lg"
              onChange={(event) => setPassword(event.currentTarget.value)}
              isInvalid={passwordRelatedErrors.includes(loginError)}
            />
            <InputRightElement
              cursor="pointer"
              onClick={() => setShowPassword(!showPassword)}
              h="full"
            >
              {showPassword ? (
                <EyeSlashIcon width="20px" height="20px" />
              ) : (
                <EyeIcon width="20px" height="20px" />
              )}
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button type="submit" isLoading={isLoading}>
          Login
        </Button>
        <h2 className="text-between-lines mb-4">
          <span className="text-gray-500"> Or </span>
        </h2>
      </form>
      <FormControl>
        <FormLabel> </FormLabel>
      </FormControl>
    </Box>
  );
};
