import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCopy, faFileAlt, faGlobe, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export const Copy = () => <FontAwesomeIcon icon={faCopy} />
export const File = () => <FontAwesomeIcon icon={faFileAlt} />
export const Globe = () => <FontAwesomeIcon icon={faGlobe} />
export const QuoteLeft = () => <FontAwesomeIcon icon={faQuoteLeft} />
export const QuoteRight = () => <FontAwesomeIcon icon={faQuoteRight} />
export const Cog = props => <FontAwesomeIcon icon={faCog} {...props} />

