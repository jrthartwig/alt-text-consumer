import React, { useState } from 'react';
import UrlMethod from './UrlMethod';

import './App.css';
import ImageUploadMethod from './ImageUploadMethod';

const App = () => {

  const [useUrl, setUseUrl] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Alt Text Generator - {useUrl ? "URL" : "Upload"}</div>
        <div className="tabs">
          <button onClick={() => setUseUrl(true)} className={useUrl ? "selected" : ""}>Use URL</button>
          <button onClick={() => setUseUrl(false)} className={useUrl ? "" : "selected"}>Use Image</button>
        </div>
        {
          useUrl
            ? <UrlMethod />
            : <ImageUploadMethod />
        }
      </header>
    </div>
  );
}

export default App;