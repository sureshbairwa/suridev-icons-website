import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'suridev-icons';
import GitHub from '../assets/github-mark-white.svg';

const Header = ({ searchTerm, setSearchTerm }) => {
  const [menuOpen, setMenuOpen] = useState(false);





  const handleLogoClick = () => {
    setSearchTerm(''); // Clear search term
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-slate-500 text-white p-3 flex justify-between items-center fixed w-full z-50">
     
      <div className="flex items-center">
        <h1 className="text-2xl font-bold pl-10">
          <Link to="/" onClick={handleLogoClick}>Suridev Icons</Link>
        </h1>
      </div>

     
      <div className="flex items-center bg-white rounded-md px-2 py-1 w-80 sm:w-96 md:w-96 lg:w-1/3 lg:hover:w-1/2 duration-300 ease-in-out">
        <Search className="text-gray-600 mr-2 stroke-1to3" /> 
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="flex-grow px-2 py-1 text-black rounded-md focus:outline-none"
        />
      </div>

      <div className="flex items-center lg:hidden z-50 text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu
          
          
        />
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/" className="text-lg font-semibold cursor-pointer hover:underline" onClick={handleLogoClick} >
          Icons
        </Link>
        <Link to="/docs" className="text-lg font-semibold cursor-pointer hover:underline" onClick={handleLogoClick}>
          Docs
        </Link>

        <Link to="/animation" className="text-lg font-semibold cursor-pointer hover:underline" onClick={handleLogoClick}>
          Animation
        </Link>
        <a href="https://github.com/sureshbairwa/suridev-icons" className="text-lg font-semibold cursor-pointer hover:underline">
          
          <img src={GitHub} width={25}/>
        </a>
      </div>

    
      {menuOpen && (
        <div className="fixed top-0 right-0 bg-slate-600 text-white w-48 h-1/3 flex flex-col items-center space-y-4 pt-16 lg:hidden z-40">
          <Link
            to="/"
            className="text-lg font-semibold cursor-pointer hover:underline"
            onClick={() => setMenuOpen(false)} 
            
          >
            Icons
          </Link>
          <Link
            to="/docs"
            className="text-lg font-semibold cursor-pointer hover:underline"
            onClick={() => setMenuOpen(false)} 
          >
            Docs
          </Link>
          <Link
            to="/animation"
            className="text-lg font-semibold cursor-pointer hover:underline"
            onClick={() => setMenuOpen(false)} 
          >
            Animation
          </Link>
          <a
            href="https://github.com/sureshbairwa/suridev-icons"
            className="text-lg font-semibold cursor-pointer hover:underline"
            onClick={() => setMenuOpen(false)} 
          >
           <img src={GitHub} width={18}/>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
