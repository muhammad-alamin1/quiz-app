import React from 'react';
import Answers from '../Answers/Answers';
import './question.css';

export default function Question() {
    return (
        <div className="question">
            <div className="qtitle">
                <span className="material-icons-outlined"> help_outline </span>
                Question Title
            </div> <br />
            <Answers />
        </div>
    )
}
