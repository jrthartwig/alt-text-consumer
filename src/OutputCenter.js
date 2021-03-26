import React from 'react';

const OutputCenter = ({ altText, imageSource }) => {
    return (
        <>
            <div className="output-center">
                {
                    altText &&
                    <img src={imageSource} alt={altText} />
                }
            </div>
            <div>{altText}</div>
        </>
    )
}

export default OutputCenter;