import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header></header>
      <main> {children} </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
