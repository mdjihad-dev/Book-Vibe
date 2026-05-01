import React from 'react';
import Header from '../Component/shared/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
      <div className="container mx-auto">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    );
};

export default MainLayout;