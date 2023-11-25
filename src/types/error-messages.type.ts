export interface ErrorMessageMap {
  [key: string]: string;
}

export const loginErrorMessage: ErrorMessageMap = {
  'auth/internal-error': 'A internal error ocurred. Try again later',
  'auth/invalid-credential': 'Invalid credentials provided',
  'auth/invalid-email': 'Please input a valid email address',
};
