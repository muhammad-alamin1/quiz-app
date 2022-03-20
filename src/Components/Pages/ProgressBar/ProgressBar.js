import React, { useRef, useState } from 'react';
import './progressbar.css';

export default function ProgressBar({ next, prev, percentage, submit }) {
    const tooltipRef = useRef();
    const [tooltip, setTooltip] = useState(false);

    const toggleToolTip = () => {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = 'none';

        } else {
            setTooltip(true);
            tooltipRef.current.style.left = `calc(${percentage}% - 65px)`
            tooltipRef.current.style.display = 'block';

        }
    }

    return (
        <div className="progressBar">
            <div className="backButton" onClick={prev} >
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className="rangeArea">
                <div className="tooltip" ref={tooltipRef} >{percentage}% Complete!</div>
                <div className="rangeBody">
                    <div className="progress" style={{ width: `${percentage}%` }} onMouseOver={toggleToolTip} onMouseOut={toggleToolTip} ></div>
                </div>
            </div>
            <button className="button next" onClick={percentage === 100 ? submit : next} >
                <span>{percentage === 100 ? 'Submit' : 'Next'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </button>
        </div>
    )
}
