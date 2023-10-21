import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DrawingCanvas from './DrawingCanvas';

function Canvas() {
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
  // const [strokeStyle, setStrokeStyle] = useState("black");

  // const handleColorChange = (newColor) => {
  //   setStrokeStyle(newColor);
  // };

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
    // THE CODE TO CREATE A POST WILL GO HERE!!!!!!
  }

  return (
    <>
      <div className='container-parent'>

        <div className='action-bar'>
            <div className='to-the-right'>
              <div onClick={createPost} className='back-button send-scribble'>
                <img src={"../public/send.png"}></img>
              </div>
            </div>
            


            {/* <div className='to-the-right right-view'>
              <button className='circle-button scribble-button sign-up'>
                sign up
              </button>
              <button className='circle-button scribble-button sign-in'>
                sign in
              </button>
            </div> */}

            <div className='to-the-left left-view canvas-back-btn'>
              <div className='back-button back-view'>
                <img src={"../public/back.png"}></img>
              </div>
            </div>
            <input placeholder='title goes here' name='name-for-scribble' className='motivation'></input>
          </div>

        {/* Layers */}
        <div></div>

        {/* CANVAS */}
        <div className='canvas-box'>
          <DrawingCanvas></DrawingCanvas>
        </div>

        {/* Editors */}
        {/* <div className='pen-editor'>
          <div className='colors'>
            <div className='color black' onClick={() => handleColorChange('black')}></div>
            <div className='color gray' onClick={() => handleColorChange('gray')}></div>
            <div className='color white' onClick={() => handleColorChange('white')}></div>
            <div className='color red' onClick={() => handleColorChange('red')}></div>
            <div className='color orange' onClick={() => handleColorChange('orange')}></div>
            <div className='color yellow' onClick={() => handleColorChange('yellow')}></div>
            <div className='color green' onClick={() => handleColorChange('green')}></div>
            <div className='color blue' onClick={() => handleColorChange('blue')}></div>
            <div className='color indigo' onClick={() => handleColorChange('indigo')}></div>
            <div className='color violet' onClick={() => handleColorChange('violet')}></div>
          </div>
        </div> */}

          {/* <div>
            <button onClick={clearCanvas} className='circle-button scribble-button scribble-tools'>
              clear
            </button>
          </div> */}


        {/* </div> */}

      </div>
    </>
  )
}

export default Canvas
