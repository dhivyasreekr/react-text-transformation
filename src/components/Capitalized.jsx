import React from 'react';

const Capitalized = ({ text, setOutputText }) => {
  const handleCapitalized = () => {
    const words = text.toLowerCase().split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    setOutputText(capitalizedWords.join(' '));
  };

  return (
    <button onClick={handleCapitalized}>
      Capitalized Case
    </button>
  );
};

export default Capitalized;