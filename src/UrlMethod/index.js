import React, { useState } from 'react';
import { APP_ENDPOINT } from '../api-endpoints';
import { fetchPOST } from '../api';
import UploadCenter from '../UploadCenter';
import OutputCenter from '../OutputCenter';
import { ALT_TEXT_PLACE_HOLDER, DEFAULT_IMAGE } from '../defaults';
import CodeOutput from '../CodeOutput';
import './__.css';

const UrlMethod = () => {
    const [imageSource, setImageSource] = useState(DEFAULT_IMAGE);
    const [altText, setAltText] = useState(ALT_TEXT_PLACE_HOLDER);
    const [hasResult, setHasResult] = useState();

    const retrieveAltText = async () => {
        try {
            const response = await fetchPOST(APP_ENDPOINT, {
                language: "en",
                url: imageSource,
            });
            setAltText(response[0].text);
            setHasResult(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="url-method">
            <textarea {...{
                'aria-label': "image url",
                className: 'code',
                value: imageSource,
                onChange: e => setImageSource(e.target.value)
            }} />

            {altText !== ALT_TEXT_PLACE_HOLDER &&
                <div className={`url-method__result${hasResult ? '--active' : ''}`}>
                    <OutputCenter altText={altText} imageSource={imageSource} />
                    <CodeOutput altText={altText} imageSource={imageSource} />
                </div>}

            <UploadCenter imageSource={imageSource} retrieveAltText={retrieveAltText} />
        </div>
    )
}

export default UrlMethod;