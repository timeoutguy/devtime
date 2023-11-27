import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { User, createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { FormEvent, useEffect, useState } from 'react';

import { ReactComponent as GithubLogo } from '../../assets/svg/github-logo.svg';
import { ReactComponent as GoogleLogo } from '../../assets/svg/google-logo.svg';
import { signUpErrorMessage } from '../../types/error-messages.type';
import { ButtonType } from '../../types/login-buttons.type';

export const SignUp = () => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<ButtonType | false>(false);
  const [signUpError, setSignUpError] = useState<string>('');

  const auth = getAuth();

  const emailRelatedErrors = ['auth/invalid-email'];
  const passwordRelatedErrors = ['auth/missing-password', 'auth/weak-password'];

  useEffect(() => {
    setSignUpError('');
  }, [email, password]);

  const handleSignUp = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(ButtonType.EMAIL);
    setSignUpError('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        changeDisplayNameOnFirebase(result.user);
      })
      .catch((err) => {
        setSignUpError(err.code);
        setIsLoading(false);
      });
  };

  const changeDisplayNameOnFirebase = (user: User) => {
    updateProfile(user, {
      displayName,
    });
  };

  return (
    <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column" p={4}>
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
        Sign Up
      </Text>
      <form className="flex flex-col w-96" onSubmit={handleSignUp}>
        <FormControl mb={4}>
          <FormLabel> Display name </FormLabel>
          <Input
            type="text"
            placeholder="John Doe"
            size="lg"
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel> E-mail </FormLabel>
          <Input
            type="email"
            placeholder="email@devtime.io"
            size="lg"
            onChange={(event) => setEmail(event.target.value)}
            isInvalid={emailRelatedErrors.includes(signUpError)}
          />
          {emailRelatedErrors.includes(signUpError) && (
            <Text mt={1} color="red" fontSize="sm">
              {signUpErrorMessage[signUpError]}
            </Text>
          )}
        </FormControl>
        <FormControl mb={4}>
          <FormLabel> Password </FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="**********"
              size="lg"
              onChange={(event) => setPassword(event.target.value)}
              isInvalid={passwordRelatedErrors.includes(signUpError)}
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
          {passwordRelatedErrors.includes(signUpError) && (
            <Text mt={1} color="red" fontSize="sm">
              {signUpErrorMessage[signUpError]}
            </Text>
          )}
        </FormControl>
        <Button
          colorScheme="green"
          type="submit"
          mb={4}
          isLoading={isLoading == ButtonType.EMAIL}
          isDisabled={isLoading && isLoading != ButtonType.EMAIL}
        >
          Sign up
        </Button>
        <h2 className="text-between-lines mb-4">
          <span className="text-gray-500"> Or </span>
        </h2>
      </form>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        className="w-96"
      >
        <Button
          isLoading={isLoading == ButtonType.GOOGLE}
          isDisabled={isLoading && isLoading != ButtonType.GOOGLE}
          width="100%"
          mb={4}
          leftIcon={<GoogleLogo width="24" height="24" />}
        >
          Sign up with Google
        </Button>
        <Button
          isLoading={isLoading == ButtonType.GITHUB}
          isDisabled={isLoading && isLoading != ButtonType.GITHUB}
          colorScheme="none"
          className="bg-charcoal hover:bg-gray-900"
          width="100%"
          leftIcon={<GithubLogo width="24" height="24" />}
        >
          Sign up with Github
        </Button>
      </Box>
    </Box>
  );
};
