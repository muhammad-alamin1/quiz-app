import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import classes from './answers.css';

export default function Answers() {
    return (
        <div className={classes.answers}>
            <Checkbox className={classes.answer} text="Python" /> <br />
            <Checkbox className={classes.answer} text="Python" /> <br />
            <Checkbox className={classes.answer} text="Python" /> <br />
            <Checkbox className={classes.answer} text="Python" /> <br />
        </div>
    )
}
