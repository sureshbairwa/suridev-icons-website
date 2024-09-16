import React from 'react';
import { useOutletContext } from 'react-router-dom'; 
import IconGrid from '../components/IconGrid';

const Home = () => {
  const { searchTerm } = useOutletContext(); 

  return (
    
      <div className='mt-14 bg-slate-50'>
        <IconGrid searchTerm={searchTerm} className="" />
      </div>
    
  );
};

export default Home;
