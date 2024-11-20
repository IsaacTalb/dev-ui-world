import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <div className="main-content">
        <Aside />
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
