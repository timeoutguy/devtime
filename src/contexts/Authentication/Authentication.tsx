import { signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';

import { auth } from '../../config';
import { IAuthContext } from '../../types/auth-context.type';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState({});

  const authenticate = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ ...user, setUser, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
