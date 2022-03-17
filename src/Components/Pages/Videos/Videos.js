import React from 'react';
import { Link } from 'react-router-dom';
import useVideoList from '../../../Hooks/useVideoList';
import Video from '../Video/Video';
import './videos.css';

export default function Videos() {
    const { loading, error, videos, hasMore } = useVideoList(0);
    // console.log(videos[0]);
    return (
        <div className="videos">
            {
                videos.length > 0 && videos[0].map(video => (
                    <Link to="/quiz" key={video.youtubeID} ><Video title={video.title} id={video.youtubeID} noq={video.noq} /></Link>
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
