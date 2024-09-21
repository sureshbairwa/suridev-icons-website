import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); 

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 

      <main className="flex-grow bg-black text-white">
        <Outlet context={{ searchTerm }} /> 
      </main>

      <Footer />
    </div>
  );
}

export default App;
