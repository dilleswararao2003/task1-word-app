import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="word-counter">
      <h1>Word Counter</h1>
      <textarea
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
