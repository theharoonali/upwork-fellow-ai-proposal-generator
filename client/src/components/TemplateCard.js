import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TemplateCard = ({ title }) => {
  return (
    <div className="flex justify-between items-center p-4 my-2 bg-gray-100 border border-gray-300 rounded-lg">
      <span>{title}</span>
      <div className="flex items-center">
        <EditIcon className="text-green-500 mr-2 cursor-pointer" />
        <DeleteIcon className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default TemplateCard;
