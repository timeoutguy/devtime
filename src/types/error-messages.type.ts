export interface ErrorMessageMap {
  [key: string]: string;
}

export const loginErrorMessage: ErrorMessageMap = {
  'auth/internal-error': 'A internal error ocurred. Try again later',
  'auth/invalid-login-credentials': 'Wrong password',
  'auth/invalid-email': 'Please input a valid email address',
};
