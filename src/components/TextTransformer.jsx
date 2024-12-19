import React, { useState } from 'react';
import Uppercase from './Uppercase';
import Lowercase from './Lowercase';
import Sentencecase from './Sentencecase';
import Capitalized from './Capitalized';

const TextTransformer = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h3>Text Transformer</h3>

      {/* Input Text */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text"
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />

      {/* Transformation Components */}
      <div>
        <Uppercase text={inputText} setOutputText={setOutputText} />
        <Lowercase text={inputText} setOutputText={setOutputText} />
        <Sentencecase text={inputText} setOutputText={setOutputText} />
        <Capitalized text={inputText} setOutputText={setOutputText} />
      </div>

      {/* Output Text */}
      <div style={{ marginTop: '20px' }}>
        <label><strong>Transformed Text:</strong> {outputText}</label>
      </div>
    </div>
  );
};

export default TextTransformer;