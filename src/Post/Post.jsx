import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import {getComments, creaetComment} from './Api'
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


function Post({curPost}) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [date, setDate] = useState(new Date());

    

  useEffect(() => {
    getComments(curPost.id, setComments)
  }, [])

  if (!curPost) {
    window.location.href = window.location.origin;
    return (
      <div></div>
    )
  }

  return (
    <>
      <div className='container-parent slide-view'>
        <div className='action-bar'>
          <div className='to-the-right'>
            
            <Link to="/post/create">
            <button className='circle-button scribble-button'>
              scribble
            </button>
            </Link>
          </div>

          <div className='to-the-left left-view'>
            <Link to={'..'}>
              <div className='back-button back-view'>
                <img src="/back.png"></img>
              </div>
            </Link>
            <div className='title-post-container'>
              <p className='title-post'>{curPost.title}</p>
            </div>
          </div>
        </div>

        <div className='view-container'>
          <img src={"/" + curPost.img}></img>
        </div>

        <div className='post-footer info-view'>
          <div className='circle-button like-button'>
            <img src='https://twittyr.com/res/ast/like.svg'></img>
          </div>
          <div className='post-footer-info'>
            <p className='post-title'>{curPost.title}</p>
            <p className='post-info post-info-view'>{curPost ? curPost.owner.username : null} · {findTime(date, curPost.created_at)}</p>
          </div>
        </div>

        <div className='comment-box flex'>
          <input 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='comment-input' placeholder="Comment" type="text" id="comment" name="comment" />
          <div
            onClick={(e) => {
              creaetComment(curPost.id, comment, setComments, setComment)
            }} 
            className='back-button send-comment'>
            <img src="/send.png"></img>
          </div>
          
        </div>

        <div className='posts-container'>

          {comments.map(comment => (
            <div key={comment.id} className='comments-container'>
                <p className='comment-timestamp'>14m</p>
                <p className='comment-author'>{comment.owner}</p>
                <p className='comment-content'>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Post
