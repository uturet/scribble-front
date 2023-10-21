import React, { useState, useContext } from 'react'
import DrawingCanvas from './DrawingCanvas';
import {uploadPost} from './Api'

function Canvas() {
  const [getImage, setGetImage] = useState(() => {})
  const [title, setTitle] = useState('')
  const [urls, setUrls] = useState([
    {id: 1, comment: "Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol ", username: "James Strawhead", time: 1697851928864, likes: 15},
    {id: 1, comment: "Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol ", username: "James Strawhead", time: 1697851928864, likes: 15},
    {id: 1, comment: "Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol ", username: "James Strawhead", time: 1697851928864, likes: 15},
    {id: 1, comment: "Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol ", username: "James Strawhead", time: 1697851928864, likes: 15},
    {id: 1, comment: "Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol Kayaking is tons of fun lol ", username: "James Strawhead", time: 1697851928864, likes: 15}
  ]);
  
  const [drawing, setDrawing] = useState(
    {
      id: 1, 
      title: "Kayaking is tons of fun lol", 
      author: "James Strawhead", 
      time: 1697851928864, 
      data: [
        {
          canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}, {canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', 
          description: ''
        }
      ]
    });
  const [date, setDate] = useState(new Date());
  const findTime = (d, time) => {
    var currentTime = d.getTime() / 1000;
    time = time / 1000;

    var timeYear = Math.floor((currentTime - time)/60/60/24/7/52);
    var timeMonth = Math.floor((currentTime - time)/60/60/24/30);
    var timeWeek = Math.floor((currentTime - time)/60/60/24/7);
    
    var timeDay = Math.floor((currentTime - time)/60/60/24);
    var timeHour = Math.floor((currentTime - time)/60/60);
    var timeMin = Math.floor((currentTime - time)/60);
    var timeSec = Math.floor((currentTime - time));

    var timeString = "";
    if (timeSec < 60) {
        timeString = timeSec + "s";
    } else if (timeMin < 60) {
        timeString = timeMin + "m";
    } else if (timeHour < 24) {
        timeString = timeHour + "h";
    } else if (timeDay < 7) {
        timeString = timeDay + "d";
    } else if (timeDay < 30) {
        timeString = timeWeek + "w";
    } else {
        timeString = "incorrect time";
    }
    
    return timeString;
  };

  const createPost = () => {
    uploadPost(getImage(), title)
  }

  return (
    <>
      <div className='container-parent'>

        <div className='action-bar'>
            <div className='to-the-right'>
              <div onClick={createPost} className='back-button send-scribble'>
                <img src="/send.png"></img>
              </div>
            </div>
            
            <div className='to-the-left left-view canvas-back-btn'>
              <div className='back-button back-view'>
                <img src="/back.png"></img>
              </div>
            </div>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='title goes here' name='name-for-scribble' className='motivation'></input>
          </div>

        {/* Layers */}
        <div></div>

        {/* CANVAS */}
        <div className='canvas-box'>
          <DrawingCanvas setGetImage={setGetImage}/>
        </div>

      </div>
    </>
  )
}

export default Canvas
