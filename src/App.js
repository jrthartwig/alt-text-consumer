import React, { useState } from 'react';
import { APP_OCR_ENDPOINT } from './api-endpoints';
import { fetchPOST } from './api';
import UploadCenter from './UploadCenter';
import OutputCenter from './OutputCenter';

import './App.css';
import { DEFAULT_IMAGE } from './defaults';
import CodeOutput from './CodeOutput';

const App = () => {

  const [imageSource, setImageSource] = useState(DEFAULT_IMAGE);
  const [altText, setAltText] = useState("< Waiting on Alt Text >");

  const retrieveAltText = async () => {
    try {
      const response = await fetchPOST(APP_OCR_ENDPOINT, {
        language: "en",
        url: imageSource,
      });
      setAltText(response[0].text);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Alt Text Generator</div>
        <input aria-label="image url" value={imageSource} onChange={e => setImageSource(e.target.value)} />
        <div className="content">
          <UploadCenter imageSource={imageSource} retrieveAltText={retrieveAltText} />
          <div className="divider"></div>
          <OutputCenter altText={altText} imageSource={imageSource} />
        </div>
        <CodeOutput altText={altText} imageSource={imageSource} />
      </header>
    </div>
  );
}

export default App;