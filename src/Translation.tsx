import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Translation: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');

  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://translation-api-provider.com/translate?text=${inputText}&target=en&source=pt&apiKey=YOUR_API_KEY`
      );
      setTranslation(response.data.translation);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div>
      <TextField
        label="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" onClick={translateText}>
        Translate
      </Button>
      <p>{translation}</p>
    </div>
  );
};

export default Translation;
