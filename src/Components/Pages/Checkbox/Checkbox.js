import React from 'react';

export default function Checkbox({ className, text, ...rest }) {
    return (
        <label id="answer" className={className}>
            <input type="checkbox" {...rest} /><span>{text}</span>
        </label>
    )
}
