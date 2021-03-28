import React from 'react';
import { QuoteLeft, QuoteRight } from '../Icons';
import './__.css';

const OutputCenter = ({ altText, imageSource }) =>
    <div className="output-center">
        <QuoteLeft />
        {
            altText &&
            <img src={imageSource} alt={altText} />
        }
        <div className="output-center__alt-text">{altText}</div>
        <QuoteRight />
    </div>

export default OutputCenter;