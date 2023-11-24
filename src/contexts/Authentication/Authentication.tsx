import { User, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { firebaseAuth } from '../../config';
import { IAuthContext } from '../../types/auth-context.type';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
