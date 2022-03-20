import _ from 'lodash';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../../Hooks/useAnswer';
import Analysis from '../Analysis/Analysis';
import Summary from '../Summary/Summary';
import './result.css';

export default function Result() {
    const { id } = useParams();
    const { state } = useLocation();
    const { qna } = state;
    const { error, loading, answers } = useAnswers(id);


    const calculate = () => {
        let score = 0;

        answers.forEach((question, index1) => {
            let correctIndexes = [];
            let checkedIndexes = [];

            question.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2);
                if (qna[0][index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score = score + 5;
            }
        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an error!</div>}
            <Summary score={userScore} noq={answers.length} />
            <Analysis answers={answers} />
        </>
    )
}
