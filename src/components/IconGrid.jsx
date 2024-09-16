import React, { useState } from 'react';
import IconModal from './IconModal';
import { Toparrow, Location, Close, Close2, Close3, Delete, Downarrow, Heart, Home, Leftarrow2, Lock, Menu, 
  Minus, Plus, Profile, RightArrow2, Search, Trash, Unlock, Uparrow } from 'suridev-icons'; // Adjust imports

const icons = [
  { name: 'Toparrow', component: <Toparrow  /> },
  { name: 'Location', component: <Location /> },
  { name: 'Close', component: <Close /> },
  { name: 'Close2', component: <Close2 /> },
  { name: 'Close3', component: <Close3 /> },
  { name: 'Delete', component: <Delete /> },
  { name: 'Downarrow', component: <Downarrow /> },
  { name: 'Heart', component: <Heart /> },
  { name: 'Home', component: <Home /> },
  { name: 'Leftarrow2', component: <Leftarrow2 /> },
  { name: 'Lock', component: <Lock /> },
  { name: 'Menu', component: <Menu /> },
  { name: 'Minus', component: <Minus /> },
  { name: 'Plus', component: <Plus /> },
  { name: 'Profile', component: <Profile /> },
  { name: 'RightArrow2', component: <RightArrow2 /> },
  { name: 'Search', component: <Search /> },
  { name: 'Trash', component: <Trash /> },
  { name: 'Unlock', component: <Unlock /> },
  { name: 'Uparrow', component: <Uparrow /> }
];

const IconGrid = ({ searchTerm }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const filteredIcons = icons.filter(icon =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10">
      {filteredIcons.length > 0 ? (
        filteredIcons.map((icon, index) => (
          <div key={index} className="w-36 h-36 flex flex-col items-center   rounded-full">
            <div
              className="w-24 h-24 flex items-center justify-center bg-gray-100 hover:bg-slate-300  rounded-full cursor-pointer "
              onClick={() => setSelectedIcon(icon)}
            >
              {icon.component}
            </div>
            <p className="mt-2 text-sm  text-gray-500 hover:text-lg  cursor-pointer hover:text-slate-800	 font-medium hover:font-semibold duration-300 ease-in-out" 
              onClick={() => setSelectedIcon(icon)}

             >{icon.name}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center">No icons found</p>
      )}

      {selectedIcon && (
        <IconModal icon={selectedIcon} onClose={() => setSelectedIcon(null)} />
      )}
    </div>
  );
};

export default IconGrid;
