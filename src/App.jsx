import React, { useState } from 'react';
import './index.css';

function CaesarCipher() {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(parseInt(e.target.value));
  };

  const encryptText = () => {
    let result = '';
    for (let i = 0; i < inputText.length; i++) {
      let char = inputText[i];
      if (char.match(/[a-z]/i)) {
        let code = inputText.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }
    setEncryptedText(result);
  };

  return (
    <div className="container">
      <h1> Monoko OG Caesar Cipher</h1>
      <div>
        <label htmlFor="inputText">Text to encrypt:</label>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="shift">Shift:</label>
        <input
          type="number"
          id="shift"
          value={shift}
          onChange={handleShiftChange}
        />
      </div>
      <button onClick={encryptText}>Encrypt</button>
      <div>
        <label htmlFor="encryptedText">Encrypted Text:</label>
        <textarea
          id="encryptedText"
          rows="4"
          value={encryptedText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default CaesarCipher;
