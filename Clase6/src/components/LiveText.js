import React, { useState } from 'react';

function LiveText() {
  const [text, setText] = useState('');

  return (
    <div className="live-text">
      <h2>Cambiar Texto al Escribir</h2>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Miren una palabra: {text}</p>
    </div>
  );
}

export default LiveText;
