import React from 'react';
import './summary.css';

export default function Summary({ score, noq }) {
    return (
        <div className="summary">
            <div className="point">
                <p className="score" style={{ textAlign: 'center' }}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
        </div>
    )
}
