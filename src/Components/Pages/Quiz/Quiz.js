import React from 'react';
import Answers from '../Answers/Answers';
import ProgressBar from '../ProgressBar/ProgressBar';
import './quiz.css';

export default function Quiz() {
    return (
        <>
            <h1 id="question-title">Which weapon is powerful ?</h1>
            <Answers />
            <ProgressBar />
        </>
    )
}
