import React from 'react';

function Button({ text, onClick = () => {}, navigate = null, disable = false }) {
  const handleClick = (e) => {
    if (disable) {
      e.preventDefault();
      return;
    }
    onClick();
  };

  return (
    <button
      className={`primary-button ${disable ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={disable}
    >
      {text}
    </button>
  );
}

export default Button;
