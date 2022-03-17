import React from 'react';
import './video.css';

export default function Video({ title, id, noq }) {
    return (
        <div>
            <div className="video">
                <img src={id} alt={title} />
                <p>{title}</p>
                <div className="qmeta">
                    <p>Questions: {noq}</p>
                    <p>Points: {noq * 5} </p>
                </div>
            </div>
        </div>
    )
}
