import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-green-500 text-white rounded-lg">
      {text}
    </button>
  );
};

export default Button;
