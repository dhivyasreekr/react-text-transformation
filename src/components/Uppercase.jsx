import React from 'react';

const Uppercase = ({ text, setOutputText }) => {
  const handleUppercase = () => {
    setOutputText(text.toUpperCase());
  };

  return (
    <button onClick={handleUppercase} style={{ marginRight: '10px' }}>
      Uppercase
    </button>
  );
};

export default Uppercase;