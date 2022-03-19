import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import useQuestion from '../../../Hooks/useQuestion';
import Answers from '../Answers/Answers';
import ProgressBar from '../ProgressBar/ProgressBar';
import './quiz.css';

const initialState = null;
const reducer = (state, action) => {

    switch (action.type) {
        case "questions":
            action.value.forEach(questions => {
                questions.forEach(option => {
                    option.checked = false;
                })
            });
            return action.value;

        case "answer":
            const questions = _.cloneDeep(state);
            questions[0][action.questionId].options[action.optionIndex].checked = action.value;

            return questions;

        default:
            return state;
    }
}


export default function Quiz() {
    const { id } = useParams();
    const { loading, error, questions } = useQuestion(id);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [qna, dispatch] = useReducer(reducer, initialState);
    const { currUser } = useAuth();
    const history = useNavigate();

    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions
        });
    }, [questions]);

    // handle changed
    const handleAnswerChanged = (e, index) => {
        dispatch({
            type: "answer",
            questionId: currQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    }

    // next question 
    const nextQuestionHandler = () => {
        if (currQuestion + 1 < questions[0].length) {
            setCurrQuestion((prevQuestion) => prevQuestion + 1);
        }
    }

    // prev question
    const prevQuestionHandler = () => {
        console.log('prev clicked')
        if (currQuestion >= 1 && currQuestion <= questions[0].length) {
            setCurrQuestion((prevQuestion) => prevQuestion - 1);
        }
    }

    // submit question
    const submitQuestion = async () => {
        const { uid } = currUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef, {
            [id]: qna
        });

        history({
            pathname: `/result/${id}`,
            state: {
                qna,
            }
        });
    }

    // calculate percentage of progressBar
    const percentage = questions.length > 0 ? (((currQuestion + 1) / questions[0].length) * 100) : 0;

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an server side error</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1 id="question-title">{qna[0][currQuestion].title}</h1>
                    <Answers options={qna[0][currQuestion].options} handleAnswerChanged={handleAnswerChanged} />
                    <ProgressBar next={nextQuestionHandler} prev={prevQuestionHandler} percentage={percentage} submit={submitQuestion} />
                </>
            )}
        </>
    )
}
