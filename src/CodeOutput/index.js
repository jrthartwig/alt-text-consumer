import React, { useRef, useState } from 'react';
import { Copy } from '../Icons';
import './__.css';

const CodeOutput = ({ imageSource, altText }) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const inputRef = useRef(null);

    function copyToClipboard(e) {
        inputRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(true);
    };

    const code = `<img src="${imageSource}" alt="${altText}" />`;

    return (
        <div className="code-output">
            {
                document.queryCommandSupported('copy') &&
                <button className={`code-output__copier${copySuccess ? " copied" : ""}`} onClick={copyToClipboard}><Copy /></button>
            }
            <label className="code-output__title">HTML   Snippet</label>
            <textarea className="code-output__pre-code" value={code} ref={inputRef} readOnly={true} />
        </div>
    );
}

export default CodeOutput;