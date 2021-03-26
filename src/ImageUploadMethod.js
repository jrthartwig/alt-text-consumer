import React, { useState } from 'react';
import { fetchFile } from './api';
import { APP_ENDPOINT } from './api-endpoints';
import CodeOutput from './CodeOutput';
import { convertToArrayBuffer, convertToBase64 } from './converter';
import OutputCenter from './OutputCenter';
import UploadCenter from './UploadCenter';

const ImageUploadMethod = () => {

    const [imageSource, setImageSource] = useState();
    const [imageRaw, setImageRaw] = useState();
    const [altText, setAltText] = useState("< Waiting on Alt Text >");

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
        try {
            const response = await fetchFile(APP_ENDPOINT, {
                language: "en",
                data: imageRaw,
            });
            setAltText(response[0].text);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <input aria-label="image input" type="file" accept="image/*" onChange={e => handleFileUpload(e)} />
            <div className="content">
                {imageSource
                    ? <>
                        <UploadCenter altText={"image to upload"} imageSource={imageSource} retrieveAltText={retrieveAltText} />
                        <div className="divider"></div>
                        <OutputCenter altText={altText} imageSource={imageSource} />
                    </>
                    : <div>Upload an image to start.</div>
                }
            </div>
            { imageSource && <CodeOutput altText={altText} imageSource={imageSource} />}
        </>
    )
}

export default ImageUploadMethod;