import React from 'react';
import Question from '../Question/Question';
import './analysis.css';

export default function Analysis({ answers }) {
    return (
        <div className="analysis">
            <h1>Analysis</h1>
            <Question answers={answers} />
        </div>
    )
}
