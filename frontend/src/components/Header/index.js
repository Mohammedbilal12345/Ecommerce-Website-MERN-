

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const navigations = [
  
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState(''); // Search input state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUserName = localStorage.getItem('userName');
    setIsLoggedIn(!!token);
    setUserName(storedUserName || '');

    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    
    if (storedDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setUserName('');
    navigate('/');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/products?q=${searchInput}`); // Redirect to the products page with the search query
    }
  };

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-Commerce</span>
        </Link>

        <button className="inline-flex md:hidden text-gray-900 focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className={`md:flex md:items-center md:justify-center ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          {navigations.map((navigation) => (
            <Link
              key={navigation.name}
              to={navigation.path}
              className="block md:inline-block mr-5 hover:text-gray-900 py-2 md:py-0 text-center"
            >
              {navigation.name}
            </Link>
          ))}
        </nav>

        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Search products..."
          />
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
          >
            Search
          </button>
        </form>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-gray-900 font-medium">Welcome, {userName}</span>
              <Link
                to="/profile"
                className="inline-flex items-center bg-gray-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded text-base text-gray-900"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-base text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/register"
              className="inline-flex items-center bg-gray-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded text-base text-gray-900"
            >
              Sign Up
            </Link>
          )}
          <Link
            to="/cart"
            className="inline-flex items-center bg-indigo-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-800 rounded text-base text-white"
          >
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <button
          onClick={toggleDarkMode}
          className="ml-4 text-gray-900 p-2 rounded-full focus:outline-none hover:bg-gray-200"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v2m0 10v2m0-4h2m-4 0h2m-3.75 2A5.25 5.25 0 1 1 12 2a5.25 5.25 0 0 1 0 10z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM12 19c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z"></path>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-2 space-y-2">
          {isLoggedIn ? (
            <>
              <span className="text-gray-900 font-medium">Welcome, {userName}</span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-base text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/register"
              className="inline-flex items-center bg-gray-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-400 rounded text-base text-gray-900"
            >
              Sign Up
            </Link>
          )}
          <Link
            to="/cart"
            className="inline-flex items-center bg-indigo-700 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-800 rounded text-base text-white"
          >
            Go to Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
