import React, { PropsWithChildren } from 'react';

import { Navbar } from '../index';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main> {children} </main>
      <footer></footer>
    </div>
  );
};
