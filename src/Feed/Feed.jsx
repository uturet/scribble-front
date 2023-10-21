import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import {AuthContext} from '../Auth/Api'
import {getFeed} from './Api'

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


function Feed({setCurPost}) {
  const user = useContext(AuthContext);
  const [page, setPage] = useState(0)
  const [buttons, setButtons] = useState(null)
  const [urls, setUrls] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getFeed(page, setUrls, setPage)
    console.log(urls[0])
  }, [])

  const posts = urls.map((post, i) => (
    <Link onClick={() => setCurPost(post)} key={`${post.id}  ${i}`} to={`/post/${post.id}`}>
    <div className='post-parent'>
      <div>
        <img className='post-image' src={"/" + post.img} alt='' />
      </div>
      <div className='post-footer'>
        <div className='circle-button like-button'>
          <img src='https://twittyr.com/res/ast/like.svg'></img>
        </div>
        <div className='post-footer-info'>
          <p className='post-title'>{post.title}</p>
          <p className='post-info'>{post.owner.username} · {findTime(date, post.created_at)}</p>
        </div>
      </div>
    </div>
    </Link>
  ));

  const auth = (<div className='to-the-right'>
    <Link to="/sign-up">
      <span className='circle-button scribble-button sign-up'>
        sign up
      </span>
    </Link>
    <Link to="/sign-in">
      <span className='circle-button scribble-button sign-in'>
        sign in
      </span>
    </Link>
  </div>)

  const newPost = (<div>
    <Link to="/post/create">
      <span className='circle-button scribble-button'>
        New Post
      </span>
    </Link>
  </div>)

  useEffect(() => {
    setButtons(user.id ? newPost : auth)
  }, [user])

  return (
    <>
      <div className='container-parent'>

        <img onClick={() => {getFeed(page, setUrls, setPage)}} className='landing' src='/landing.png' alt=''/>

        <div className='action-bar ${isStickyActive ? "active-box" : ""}'>

          {buttons}
          
          <div className='to-the-left'>
            <select className='dropdown' name="display-type">
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>

        <div className='posts-container'>

          {posts}
        </div>
      </div>
    </>
  )
}

export default Feed
