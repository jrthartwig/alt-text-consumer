import React from 'react';
import './__.css';

export const ActionsButtonList = ({ children }) =>
    <div className="action-buttons">{children}</div>

const ActionButton = ({ icon, text, selected, ...rest }) =>
    <button className={`action-button${selected ? '--selected' : ''}`} {...rest}>
        <div className="action-button__icon">{icon}</div>
        <div className="action-button__text">{text}</div>
    </button>

export default ActionButton;