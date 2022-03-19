import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import classes from './answers.css';

export default function Answers({ options = [], handleAnswerChanged }) {
    return (
        <div className={classes.answers}>
            {
                options.map((option, index) => (
                    <>
                        <Checkbox key={index} className={classes.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleAnswerChanged(e, index)} />
                        <br />
                    </>
                ))
            }
        </div>
    )
}
