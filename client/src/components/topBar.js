import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = ({ heading }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-green-500 text-white">
      <h1 className="text-xl justify-center items-center">{heading}</h1>
    <div className=" ">
      <button>
      <SettingsIcon className= "" style={{ fontSize: 24 }} />
      </button>
      </div>
    </div>
  );
};

export default TopBar;
