import React from 'react';

const Sentencecase = ({ text, setOutputText }) => {
  const handleSentencecase = () => {
    const sentence = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setOutputText(sentence);
  };

  return (
    <button onClick={handleSentencecase} style={{ marginRight: '10px' }}>
      Sentence Case
    </button>
  );
};

export default Sentencecase;