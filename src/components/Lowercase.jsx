import React from 'react';

const Lowercase = ({ text, setOutputText }) => {
  const handleLowercase = () => {
    setOutputText(text.toLowerCase());
  };

  return (
    <button onClick={handleLowercase} style={{ marginRight: '10px' }}>
      Lowercase
    </button>
  );
};

export default Lowercase;