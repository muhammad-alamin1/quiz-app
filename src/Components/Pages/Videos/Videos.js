import React from 'react';
import { Link } from 'react-router-dom';
import Video from '../Video/Video';
import './videos.css';

export default function Videos() {
    return (
        <div className="videos">
            <Link to="/quiz" ><Video /></Link>
            <Link to="/quiz" ><Video /></Link>
            <Link to="/quiz" ><Video /></Link>
            <Link to="/quiz" ><Video /></Link>
            <Link to="/quiz" ><Video /></Link>
        </div>
    )
}
