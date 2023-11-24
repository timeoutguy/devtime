import { User } from 'firebase/auth';
import { Dispatch, SetStateAction } from 'react';

export interface IAuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}
