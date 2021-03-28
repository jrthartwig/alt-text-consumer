import React from 'react';
import './__.css';

const OutputCenter = ({ altText, imageSource }) => {
    return (
        <div className="output-center">
            {
                altText &&
                <img src={imageSource} alt={altText} />
            }
            <div>{altText}</div>
        </div>
    )
}

export default OutputCenter;