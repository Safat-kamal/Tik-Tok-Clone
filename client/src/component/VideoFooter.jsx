import React from 'react';
import './VideoFooter.css';

const VideoFooter = ({channel_name,channel_description,song}) => {
  return (
    <div className='videofooter'>
      <div className="video__footer__text">
        <h3 className="channel__name">@{channel_name}</h3>
        <p className="channel__description">{channel_description}</p>
        <div className="video__footer_ticker">
          <i className="fa-solid fa-music"></i>
          <p>{song}</p>
        </div>
      </div>

    </div>
  )
}

export default VideoFooter
