import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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

  const comments = urls.map(comment => (
    <div key={comment.id} className='comments-container'>
        <p className='comment-timestamp'>14m</p>

        <p className='comment-author'>{comment.username}</p>
        <p className='comment-content'>{comment.comment}</p>
    </div>
  ));

  return (
    <>
      <div className='container-parent slide-view'>
        <div className='action-bar'>
          <div className='to-the-right'>
            <div className='profile'>
              <img src={"https://twittyr.com/res/usr/j.png"}></img>
            </div>
            <button className='circle-button scribble-button'>
              scribble
            </button>
          </div>


          {/* <div className='to-the-right right-view'>
            <button className='circle-button scribble-button sign-up'>
              sign up
            </button>
            <button className='circle-button scribble-button sign-in'>
              sign in
            </button>
          </div> */}

          <div className='to-the-left left-view'>
            <div className='back-button back-view'>
              <img src={"../public/back.png"}></img>
            </div>
            <div className='title-post-container'>
              <p className='title-post'>{drawing.title}</p>
            </div>
          </div>
        </div>

        <div className='view-container'>
          <img src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-03/puppy-dog-mc-230321-03-b700d4.jpg'></img>
        </div>

        <div className='post-footer info-view'>
          <div className='circle-button like-button'>
            <img src='https://twittyr.com/res/ast/like.svg'></img>
          </div>
          <div className='post-footer-info'>
            <p className='post-title'>{drawing.title}</p>
            <p className='post-info post-info-view'>{drawing.author} · {findTime(date, drawing.time)}</p>
          </div>
        </div>

        <div className='comment-box'>
          <div className='back-button send-comment'>
            <img src={"../public/send.png"}></img>
          </div>

          <input className='comment-input' placeholder="Comment" type="text" id="comment" name="comment" />
          
        </div>

        <div className='posts-container'>

          {comments}
        </div>
      </div>
    </>
  )
}

export default App
