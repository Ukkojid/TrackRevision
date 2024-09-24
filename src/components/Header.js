import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">TrackRevision</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/features" className="hover:text-gray-400">Features</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
          <li><Link to="/signup" className="hover:text-gray-400">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
