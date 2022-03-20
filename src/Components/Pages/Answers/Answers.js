import React, { Fragment } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import classes from './answers.css';

export default function Answers({ options = [], handleAnswerChanged, input }) {
    console.log(options);
    return (
        <div className={classes.answers}>
            {
                options.map((option, index) => (
                    <Fragment key={index}>
                        {
                            input ? (
                                <>
                                    <Checkbox key={index} className={classes.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleAnswerChanged(e, index)} />
                                    <br />
                                </>
                            ) : (
                                <>
                                    <Checkbox key={index} className={`${classes.answer}`} text={option.title} defaultChecked={option.checked} disabled />
                                    <br />
                                </>)
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}
