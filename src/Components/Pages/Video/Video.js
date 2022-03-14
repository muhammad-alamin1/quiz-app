import React from 'react';
import Clang from '../../../images/clang.jpeg';
import './video.css';

export default function Video() {
    return (
        <div>
            <a href="quiz.html"
            ><div className="video">
                    <img src={Clang} alt="" />
                    <p>C Programming Language</p>
                    <div className="qmeta">
                        <p>Questions</p>
                        <p>Score : </p>
                    </div>
                </div>
            </a>
        </div>
    )
}
