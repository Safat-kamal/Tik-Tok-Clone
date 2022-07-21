import React, { useState } from 'react';
import './VideoSidebar.css';

const VideoSidebar = ({likes,comments,shares}) => {
    const [like,setLike]= useState(false);
    return (
        <div className='video__sidebar'>
            <div className="video_sidebar_likes">
                {like ? <i className="fa-solid fa-heart" onClick={()=>setLike(false)}></i>:<i className="fa-regular fa-heart" onClick={()=>setLike(true)}></i>}
                <p>{like?likes+1:likes}</p>
            </div>
            <div className="video_sidebar_comments">
            <i className="fa-regular fa-message"></i>
                <p>{comments}</p>
            </div>
            <div className="video_sidebar_shares">
                <i className="fa-solid fa-share-nodes"></i>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
