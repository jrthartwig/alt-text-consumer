import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCopy, faFileAlt, faGlobe, faQuoteLeft, faQuoteRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Copy = () => <FontAwesomeIcon icon={faCopy} />
export const File = () => <FontAwesomeIcon icon={faFileAlt} />
export const Globe = () => <FontAwesomeIcon icon={faGlobe} />
export const QuoteLeft = () => <FontAwesomeIcon icon={faQuoteLeft} />
export const QuoteRight = () => <FontAwesomeIcon icon={faQuoteRight} />
export const Cog = () => <FontAwesomeIcon icon={faCog} />
export const Spinner = () => <FontAwesomeIcon icon={faSpinner} spin />