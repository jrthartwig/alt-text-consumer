import React from 'react';
import { QuoteLeft, QuoteRight } from '../Icons';
import './__.css';

const OutputCenter = ({ altText }) =>
    <div className="output-center">
        <QuoteLeft />
        <div className="output-center__alt-text">{altText}</div>
        <QuoteRight />
    </div>

export default OutputCenter;