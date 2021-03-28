import React from 'react';

const UploadCenter = ({ imageSource, retrieveAltText }) =>
    <>
        <div className='url-method__display-image'>
            {imageSource
                ? <img src={imageSource} />
                : <div className="url-method__image-placeholder"></div>
            }
        </div>
        <button className='url-method__generate-button' onClick={retrieveAltText}>Generate Alt Text</button>
    </>

export default UploadCenter;