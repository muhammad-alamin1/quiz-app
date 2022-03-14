import React from 'react';
import './progressbar.css';

export default function ProgressBar() {
    return (
        <div className="progressBar">
            <div className="backButton">
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className="rangeArea">
                <div className="tooltip">24% Cimplete!</div>
                <div className="rangeBody">
                    <div className="progress" style={{ width: '20%' }}></div>
                </div>
            </div>
            <a href="#">
                <button className="button next">
                    <span>Next</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </button>
            </a>
        </div>
    )
}
