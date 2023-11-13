import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/navbar/Navbar';

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
