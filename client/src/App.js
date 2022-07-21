import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './component/Video';

function App() {  
  const [videoes,setVideoes] = useState([])
  useEffect(()=>{
    let url = process.env.REACT_APP_SERVER_URL;
    fetch(`${url}/posts`).then((response)=>{
      return response.json()
    }).then((data)=>{
      setVideoes(data);
    }).catch((error)=>{
      console.warn(error.message);
    })
  }, []);
  return (
    <div className="app">
      <div className="app__videoes">
        {videoes.map((video)=>{
          return (<Video url={video.url} channel_name={video.channel_name} channel_description={video.channel_description} song={video.song} likes={video.likes} comments={video.comments} shares={video.shares} key={video._id}/>)
        })}
      </div>
    </div>
  );
}

export default App;
