import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {

  const [altText, setAltText] = useState();

  const imageSrc = "https://www.sciencenews.org/wp-content/uploads/2019/07/072319_ee_cat-allergy_feat.jpg"

  useEffect(() => {
    const body = {
      url: imageSrc,
      language: "en"
    };

    fetch('https://alt-text-generator.azurewebsites.net:443/api/Alt-Text-Generator/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gRkN8GmmAPVncl6kxRu_RhpoYF2wKDLKqRM51ULixQY',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(response => setAltText(response[0].text))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          altText &&
          <img src={imageSrc} alt={altText} />
        }
      </header>
    </div>
  );
}

export default App;
