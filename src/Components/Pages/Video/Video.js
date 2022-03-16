import React from 'react';
import Clang from '../../../images/clang.jpeg';
import './video.css';

export default function Video() {
    return (
        <div>
            ><div className="video">
                <img src={Clang} alt="" />
                <p>C Programming Language</p>
                <div className="qmeta">
                    <p>Questions: 3</p>
                    <p>Score : </p>
                </div>
            </div>
        </div>
    )
}
