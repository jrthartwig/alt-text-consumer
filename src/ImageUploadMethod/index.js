import React, { useState } from 'react';
import { fetchFile } from '../api';
import { APP_IMAGE_ENDPOINT } from '../api-endpoints';
import CodeOutput from '../CodeOutput';
import { convertToArrayBuffer, convertToBase64 } from '../converter';
import OutputCenter from '../OutputCenter';
import UploadCenter from '../UploadCenter';
import './__.css';

const ImageUploadMethod = () => {

    const [imageSource, setImageSource] = useState();
    const [imageRaw, setImageRaw] = useState();
    const [altText, setAltText] = useState("< Waiting on Alt Text >");
    const [hasResult, setHasResult] = useState();
    const [fetching, setFetching] = useState();

    const handleFileUpload = async e => {
        const file = e.target.files[0];
        const fileAsRawData = await convertToArrayBuffer(file);
        const fileAsBase64 = await convertToBase64(file);
        setImageSource(fileAsBase64);
        setImageRaw(fileAsRawData);
    }

    const retrieveAltText = async () => {
        if (!imageSource)
            return;
        setFetching(true);
        try {
            const response = await fetchFile(APP_IMAGE_ENDPOINT, imageRaw);
            setAltText(response.description.captions[0].text);
            setHasResult(true);
        } catch (error) {
            console.error(error);
        }
        setFetching(false);
    }

    return (
        <>
            <input {...{
                'aria-label': "image input",
                type: "file",
                accept: "image/*",
                onChange: e => handleFileUpload(e),
            }} />




            {fetching && <div className='image-upload-method__fetching'></div>}

            <div className={`image-upload-method__result${hasResult && imageSource && !fetching ? '--active' : ''}`}>
                <CodeOutput {...{ altText, imageSource }} />
                <OutputCenter {...{ altText, imageSource }} />
            </div>

            <UploadCenter {...{ imageSource, retrieveAltText }} />
            {/* <UploadCenter altText={"image to upload"} imageSource={imageSource} retrieveAltText={retrieveAltText} /> */}
        </>
    )
}

export default ImageUploadMethod;