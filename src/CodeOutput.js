import React, { useRef, useState } from 'react';

const CodeOutput = ({ imageSource, altText }) => {

    const [copySuccess, setCopySuccess] = useState(false);
    const inputRef = useRef(null);

    function copyToClipboard(e) {
        inputRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(true);
    };

    const code = `<img src={${imageSource}} alt="${altText}" />`;

    return (
        <div className="code-output">
            {
                document.queryCommandSupported('copy') &&
                <button className={copySuccess ? "copier copied" : "copier"} onClick={copyToClipboard}>{'\u23CD'}</button>
            }
            <label className="code-title">React Snippet</label>
            <input className="pre-code" value={code} ref={inputRef} readOnly={true} />
        </div>
    );
}

export default CodeOutput;