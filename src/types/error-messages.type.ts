export interface ErrorMessageMap {
  [key: string]: string;
}

export const loginErrorMessage: ErrorMessageMap = {
  'auth/internal-error': 'A internal error ocurred. Try again later',
  'auth/invalid-login-credentials': 'Wrong password',
  'auth/invalid-email': 'A valid email address must be provided',
};

export const signUpErrorMessage: ErrorMessageMap = {
  'auth/invalid-email': 'A valid email address must be provided',
  'auth/missing-password': 'A password must be provided',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/email-already-in-use': 'Email already in use',
};
