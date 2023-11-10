import Navbar from 'components/navbar/Navbar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
