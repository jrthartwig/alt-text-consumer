import React from 'react';

const UploadCenter = ({ imageSource, retrieveAltText }) => {
    return (
        <>
            <div className="upload-center">
                <img src={imageSource} />
            </div>
            <button onClick={retrieveAltText}>Generate Alt Text</button>
        </>
    )
}

export default UploadCenter;