import { UserCredential } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

export interface IAuthContext {
  authenticate: (email: string, password: string) => Promise<UserCredential>;
  logout: () => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setUser: Dispatch<SetStateAction<{}>>;
}
