import React, { useState, useEffect } from 'react';
import IconModal from './IconModal';
import {  Close, Close2, Close3, Delete, Downarrow, Heart, Home, Leftarrow2, Lock, Menu, 
  Minus, Plus, Profile, RightArrow2, Search, Trash, Unlock, Uparrow } from 'suridev-icons'; // Adjust imports
import { Circle, Ellipse, Hexagon, Parallelogram, Pentagon, Rectangle, Square, Star, Trapezoid, Triangle } from 'suridev-icons';
import { IconAnimation } from 'suridev-icons';

const icons = [

  { name: 'Close', component: Close },
  { name: 'Delete', component: Delete },
  { name: 'Downarrow', component: Downarrow },
  { name: 'Heart', component: Heart },
  { name: 'Home', component: Home },
  { name: 'Leftarrow2', component: Leftarrow2 },
  { name: 'Lock', component: Lock },
  { name: 'Menu', component: Menu },
  { name: 'Minus', component: Minus },
  { name: 'Close2', component: Close2 },
  { name: 'Plus', component: Plus },
  { name: 'Profile', component: Profile },
  { name: 'RightArrow2', component: RightArrow2 },
  { name: 'Search', component: Search },
  { name: 'Trash', component: Trash },
  { name: 'Unlock', component: Unlock },
  { name: 'Uparrow', component: Uparrow },
  { name: 'Circle', component: Circle },
  { name: 'Close3', component: Close3 },
  { name: 'Ellipse', component: Ellipse },
  { name: 'Hexagon', component: Hexagon },
  { name: 'Parallelogram', component: Parallelogram },
  { name: 'Pentagon', component: Pentagon },
  { name: 'Rectangle', component: Rectangle },
  { name: 'Square', component: Square },
  { name: 'Star', component: Star },
  { name: 'Trapezoid', component: Trapezoid },
  { name: 'Triangle', component: Triangle },
];

const IconGrid = ({ searchTerm }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [styles, setStyles] = useState({});
  const [IconClass, setIconClass]=useState('icon-animation');


  useEffect(() => {
    const interval = setInterval(() => {
      const randomClass = getRandomItem();
      setIconClass(randomClass);
      console.log(randomClass);
    }, 5000); 
  
    return () => clearInterval(interval); 
  }, []);

 

  const filteredIcons = icons.filter(icon =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  function getRandomItem() {
    const IconClasses = ['icon-animation' ,'two-color','three-color','stroke-1to2','stroke-1to3','icon-animation']

    const randomIndex = Math.floor(Math.random() * IconClasses.length);
    return IconClasses[randomIndex];
  }


  IconAnimation();

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10">
      {filteredIcons.length > 0 ? (
        filteredIcons.map((icon, index) => (
          <div key={index} className="w-36 h-36 flex flex-col items-center rounded-full">
            <div
              className="w-24 h-24 flex items-center justify-center bg-black hover:bg-[#444444]			 rounded-full cursor-pointer"
              onClick={() => setSelectedIcon(icon)}// #444444 #FF00FF #f904f9
            >
            {React.createElement(icon.component, { className:IconClass , height:"40" ,width:"40" ,stroke:'purple'})}               </div>
            <p
              className="mt-2 text-base text-green-500 hover:text-xl cursor-pointer hover:text-blue-500 font-medium hover:font-semibold duration-300 ease-in-out"
              onClick={() => setSelectedIcon(icon)}
            >
              {icon.name}
            </p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-white text-xl">No icons found</p>
      )}

      {selectedIcon && (
        <IconModal icon={selectedIcon} styles={styles} onClose={() => setSelectedIcon(null)} />
      )}
    </div>
  );
};

export default IconGrid;
