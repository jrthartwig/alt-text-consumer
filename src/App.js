import React, { useState } from 'react';
import UrlMethod from './UrlMethod';
import ImageUploadMethod from './ImageUploadMethod';
import Header, { HeaderAltColor } from './Header';
import './App.css';
import ActionButton, { ActionsButtonList } from './ActionButton';
import { File, Globe } from './Icons';


const App = () => {
  const [useUrl, setUseUrl] = useState(true);

  const getImageFromUrl = () => setUseUrl(true);
  const getImageFromFile = () => setUseUrl(false);

  return (
    <div className="app">
      <Header {...{ title: <>Alt Text <HeaderAltColor>Generator</HeaderAltColor></> }} />
      <div className="app__content">

        <ActionsButtonList>
          <ActionButton {...{
            onClick: getImageFromUrl,
            selected: useUrl,
            icon: <Globe />,
            text: 'Generate By URL'
          }} />

          <ActionButton {...{
            onClick: getImageFromFile,
            selected: !useUrl,
            icon: <File />,
            text: "Generate From File",
          }} />
        </ActionsButtonList>

        {useUrl
          ? <UrlMethod />
          : <ImageUploadMethod />}

      </div>
    </div>
  );
}

export default App;