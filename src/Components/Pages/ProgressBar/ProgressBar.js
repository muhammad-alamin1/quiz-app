import React from 'react';
import './progressbar.css';

export default function ProgressBar({ next, prev, percentage, submit }) {
    return (
        <div className="progressBar">
            <div className="backButton" onClick={prev} >
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className="rangeArea">
                <div className="tooltip">{percentage}% Cimplete!</div>
                <div className="rangeBody">
                    <div className="progress" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
            <button className="button next" onClick={percentage === 100 ? submit : next} >
                <span>{percentage === 100 ? 'Submit' : 'Next'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </button>
        </div>
    )
}
