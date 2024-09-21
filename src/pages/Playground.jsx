import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import { Lock, Star, Close, Circle, Square } from 'suridev-icons';
import { useOutletContext } from 'react-router-dom'; 
import IconGrid from '../components/IconGrid';


const Playground = () => {



  // State for icon properties
  const [size, setSize] = useState(50);
  const [stroke, setStroke] = useState('white');
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [fill, setFill] = useState('none');
  const [opacity, setOpacity] = useState(1);
  const [showCode, setShowCode] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState('Lock');
  const { searchTerm } = useOutletContext();


  useEffect(() => {
    if (searchTerm) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [searchTerm]); 

  useEffect(() => {
    Prism.highlightAll();
  }, [size, stroke, strokeWidth, fill, opacity,selectedIcon]);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleStrokeChange = (e) => setStroke(e.target.value);
  const handleStrokeWidthChange = (e) => setStrokeWidth(e.target.value);
  const handleFillChange = (e) => setFill(e.target.value);
  const handleOpacityChange = (e) => setOpacity(e.target.value);
  const handleShowCode = () => setShowCode(true);

  const icons = { Lock, Star, Close, Circle, Square };

  const handleIconChange = (e) => {
    setSelectedIcon(e.target.value);
  };

  const SelectedIconComponent = icons[selectedIcon];
  const [darkMode, setDarkMode] = useState(true);

  const handleMode = () => {
    setDarkMode(!darkMode);
    if(stroke=="black" || stroke=="white"){
      setStroke(darkMode ? "black" : "white");
    }
    
  };

  return (

    <div className=''> 
      <div className='mt-16'>

        
      {searchTerm ? (
        <IconGrid searchTerm={searchTerm} />
      ) : (
        <p className='hidden'>Hello</p>
      )}

      </div>
    
    <div className='container mx-auto mt-16 flex flex-wrap bg-black'>


      
      
    
      {/* Left side for icon display */}
      <div className={`flex flex-col  rounded-lg p-3 mt-10 relative`}  style={{ width: '600px', height: '500px' }}>
        <div className='flex items-center justify-center'>
          <select
            value={selectedIcon}
            onChange={handleIconChange}
            className='border border-gray-500 w-1/2 h-8 text-lg mb-3 text-black'
          >
            {Object.keys(icons).map((icon) => (
              <option key={icon} value={icon}>
                {icon}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button className={` ${darkMode ? 'bg-white' : 'bg-black'} absolute top-[60px] left-4 text-black rounded-lg w-10 h-8`} onClick={handleMode} >
          
          </button>
        </div>
        <div className={`border border-purple-500 ${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300  w-full h-full flex items-center justify-center shadow-lg rounded-xl `}>
          <SelectedIconComponent
            height={size}
            width={size}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={fill}
            opacity={opacity}
           
          />
        </div>
      </div>

      {/* Right side for sliders and controls */}
      <div className='flex-1 p-8 bg-black text-white  rounded-lg m-4'>
        <h2 className='text-2xl font-bold  mb-6'>Customize Icon</h2>

        {/* Size Control */}
        <div className='mb-6'>
          <label className='block  font-semibold mb-2'>Size: {size}px</label>
          <input
            type='range'
            min='10'
            max='500'
            value={size}
            onChange={handleSizeChange}
            className='w-full focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {/* Stroke Color Control */}
        <div className='mb-6'>
          <label className='block  font-semibold mb-2'>Stroke Color:</label>
          <input
            type='color'
            value={stroke}
            onChange={handleStrokeChange}
            className='w-14 h-10 border rounded-lg  cursor-pointer'
          />
        </div>

        {/* Stroke Width Control */}
        <div className='mb-6'>
          <label className='block  font-semibold mb-2'>Stroke Width: {strokeWidth}px</label>
          <input
            type='range'
            min='0'
            max='5'
            step='0.1'
            value={strokeWidth}
            onChange={handleStrokeWidthChange}
            className='w-full focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {/* Fill Color Control */}
        <div className='mb-6 '>
          <label className='block  font-semibold mb-2'>Fill Color:</label>
          <input
            type='color'
            value={fill}
            onChange={handleFillChange}
            className='w-14 h-10 border rounded-lg focus:ring-green-900 focus:border-purple-500 cursor-pointer'
          />
        </div>

        {/* Opacity Control */}
        <div className='mb-6'>
          <label className='block  font-semibold mb-2'>Opacity: {opacity}</label>
          <input
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={opacity}
            onChange={handleOpacityChange}
            className='w-full focus:ring-blue-500 focus:border-blue-500'
          />
        </div>

        {/* Display generated component code */}
        {showCode && (
          <div className=''>
            <code className='block text-sm text-gray-700 language-jsx'>
              {`<${selectedIcon} height="${size}" width="${size}" stroke="${stroke}" strokeWidth="${strokeWidth}" fill="${fill}" opacity="${opacity}" />`}
            </code>
          </div>
        )}
      </div>
      
    </div>
    </div>
  );
};

export default Playground;
