import React, { useState } from 'react';
import { APP_ENDPOINT } from './api-endpoints';
import { fetchPOST } from './api';
import UploadCenter from './UploadCenter';
import OutputCenter from './OutputCenter';
import { ALT_TEXT_PLACE_HOLDER, DEFAULT_IMAGE } from './defaults';
import CodeOutput from './CodeOutput';

const UrlMethod = () => {

    const [imageSource, setImageSource] = useState(DEFAULT_IMAGE);
    const [altText, setAltText] = useState(ALT_TEXT_PLACE_HOLDER);

    const retrieveAltText = async () => {
        try {
            const response = await fetchPOST(APP_ENDPOINT, {
                language: "en",
                url: imageSource,
            });
            setAltText(response[0].text);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <input aria-label="image url" value={imageSource} onChange={e => setImageSource(e.target.value)} />
            <div className="content">
                <UploadCenter imageSource={imageSource} retrieveAltText={retrieveAltText} />
                <div className="divider"></div>
                {
                    altText === ALT_TEXT_PLACE_HOLDER
                        ? <div>Alt text has not been generated.</div>
                        : <OutputCenter altText={altText} imageSource={imageSource} />
                }
            </div>
            {
                altText !== ALT_TEXT_PLACE_HOLDER
                && <CodeOutput altText={altText} imageSource={imageSource} />
            }
        </>
    )
}

export default UrlMethod;