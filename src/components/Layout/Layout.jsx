import Navbar from 'components/navbar/Navbar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
