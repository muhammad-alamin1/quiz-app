import React from 'react';
import Answers from '../Answers/Answers';
import './question.css';

export default function Question({ answers = [] }) {
    return answers.map((answer, index) => (
        <div className="question" key={index} >
            <div className="qtitle">
                <span className="material-icons-outlined"> help_outline </span>
                {answer.title}
            </div> <br />
            <Answers input={false} options={answer.options} />
        </div>
    ))
}
