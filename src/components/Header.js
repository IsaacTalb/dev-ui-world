import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6">
      <h1 className="text-xl font-bold">Dev-UI World</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
