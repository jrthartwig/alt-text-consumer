import React, { useState } from 'react';
import { APP_ENDPOINT } from '../api-endpoints';
import { fetchPOST } from '../api';
import UploadCenter from '../UploadCenter';
import OutputCenter from '../OutputCenter';
import { ALT_TEXT_PLACE_HOLDER, DEFAULT_IMAGE } from '../defaults';
import CodeOutput from '../CodeOutput';
import './__.css';
import { Spinner } from '../Icons';

const UrlMethod = () => {
    const [imageSource, setImageSource] = useState(DEFAULT_IMAGE);
    const [altText, setAltText] = useState(ALT_TEXT_PLACE_HOLDER);
    const [hasResult, setHasResult] = useState();
    const [fetching, setFetching] = useState();

    const retrieveAltText = async () => {
        setFetching(true);
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
        setFetching(false);
    }

    return (
        <div className="url-method">
            <label className="url-method__url-input-label" htmlFor='url'>Image Url</label>
            <textarea {...{
                'aria-label': "image url",
                id: 'url',
                className: 'code',
                value: imageSource,
                onChange: e => setImageSource(e.target.value),
                onClick: e => e.target.select(), 
                placeholder:'https://www.my-domain.com/my-image.jpg'
            }} />

            {fetching && <div className='url-method__fetching'></div>}
            <div className={`url-method__result${hasResult && imageSource && !fetching ? '--active' : ''}`}>
                <CodeOutput {...{ altText, imageSource }} />
                <OutputCenter {...{ altText, imageSource }} />
            </div>

            <UploadCenter {...{ imageSource, retrieveAltText }} />
        </div>
    )
}

export default UrlMethod;