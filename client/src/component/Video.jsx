import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import './Video.css';
import VideoSidebar from './VideoSidebar';

const Video = ({url,channel_name,channel_description,song,likes,comments,shares}) => {
  const [playing,setPlaying] = useState(false);
  const playerRef = useRef(null);
  const handleClickPress = ()=>{
    if(playing){
      playerRef.current.pause();
      setPlaying(false);
    }
    else{
      playerRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className='video'>
        <video onClick={handleClickPress} ref={playerRef} className="videoPlayer" loop src={url}></video>
        <VideoFooter channel_name={channel_name} channel_description={channel_description} song={song}/>
        <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  )
}

export default Video
