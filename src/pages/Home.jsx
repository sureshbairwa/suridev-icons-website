import React from 'react';
import { useOutletContext } from 'react-router-dom'; 
import IconGrid from '../components/IconGrid';
import { useEffect } from 'react';
const Home = () => {
  const { searchTerm } = useOutletContext(); 

  useEffect(() => {
    if (searchTerm) {
      // Scroll to the top when searchTerm changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchTerm]); 

  return (
    
      <div className='mt-14 bg-slate-50'>
        <IconGrid searchTerm={searchTerm} className="" />
      </div>
    
  );
};

export default Home;
