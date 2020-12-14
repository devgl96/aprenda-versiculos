import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./index.css";

function App() {
  const proverbiosSection = {
    1: 33, 
    2: 22, 
    3: 35,
    4: 27,
    5: 23, 
    6: 35,
    7: 27, 
    8: 36,
    9: 18,
    10: 32,
    11: 31,
    12: 28,
    13: 25,
    14: 35,
    15: 33,
    16: 33,
    17: 28,
    18: 24,
    19: 29,
    20: 30,
    21: 31,
    22: 29,
    23: 35,
    24: 34,
    25: 28,
    26: 28,
    27: 27,
    28: 28,
    29: 27,
    30: 33,
    31: 31
  };

  const [verseProverbio, setVerseProverbio] = useState("");

  const fetchProverbios = async () => {
    // Initialize the variable to receive the data API
    let proverbiosData = "";

    // Search the verse in the API
    let chapters = Math.floor(Math.random() * 31) + 1;
    let verse = Math.floor(Math.random() * 36) + 1;

    while(verse > proverbiosSection[chapters]) {
      verse = Math.floor(Math.random() * 36) + 1;
    }

    proverbiosData = await axios(`https://bible-api.com/Proverbios+${chapters}:${verse}?translation=almeida`);
    // console.log(proverbiosData.data);
    
    setVerseProverbio(proverbiosData.data);
  };

  // Catch data from API Bible
  useEffect(() => {
    fetchProverbios();
  }, []);

  return (
    <div className="app">
      <div className="titleSection">
        <h1>Aprendendo Provérbios</h1>
      </div>
      
      <div className="proverbio-text">
        <p>{verseProverbio.text}</p>
        <strong>{verseProverbio.reference}</strong>
      </div>

      <div className="buttonSection">
        <button className="generate-verse" onClick={fetchProverbios}>Gerar Versículo</button>
      </div>
    </div>
  );
}

export default App;
