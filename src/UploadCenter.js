import React from 'react';

const UploadCenter = ({ imageSource, retrieveAltText }) => {
    return (
        <div className="upload-center">
            <img src={imageSource} />
            <button onClick={retrieveAltText}>Generate Alt Text</button>
        </div>
    )
}

export default UploadCenter;