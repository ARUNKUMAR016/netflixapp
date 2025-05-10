import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar bg-black text-white shadow-md px-4">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-red-600 tracking-wide">Netflix</Link>
      </div>
      <div className="flex-none space-x-2">
        <Link to="/" className="btn bg-red-600 hover:bg-red-700 text-white">Home</Link>
        <Link to="/update" className="btn bg-red-600 hover:bg-red-700 text-white">Update</Link>
      </div>
    </div>
  );
};

export default NavBar;
