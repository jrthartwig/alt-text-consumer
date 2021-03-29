import React from 'react';
import './__.css';

const UploadCenter = ({ imageSource, retrieveAltText, altText }) =>
    <>
        <div className='upload-center__display-image'>
            {imageSource
                ? <img src={imageSource} alt={altText || 'Generate ALT text from this image'} />
                : <div className="upload-center__image-placeholder"></div>
            }
        </div>
        <button className='upload-center__generate-button' onClick={retrieveAltText}>Generate Alt Text</button>
    </>

export default UploadCenter;