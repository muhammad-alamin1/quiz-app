import React from 'react';
import { Link } from 'react-router-dom';
import useVideoList from '../../../Hooks/useVideoList';
import Video from '../Video/Video';
import './videos.css';

export default function Videos() {
    const { loading, error, videos } = useVideoList(0);
    // console.log(videos[0]);
    return (
        <div className="videos">
            {
                videos.length > 0 && videos[0].map(video => (
                    <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID} ><Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq} thumbnail={video.thumbnail} /></Link>
                ))
            }
            {
                !loading && videos.length === 0 && (
                    <div>
                        No Data Available.!
                    </div>
                )
            }
            {
                error && (
                    <div>
                        There was an server side error.!
                    </div>
                )
            }
            {
                loading && <div>Loading...</div>
            }
        </div>
    )
}
