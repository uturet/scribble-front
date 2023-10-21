import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import {AuthContext} from '../Auth/Api'

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


function Feed() {
  const user = useContext(AuthContext);
  const [buttons, setButtons] = useState(null)
  console.log('U', user)
  const [urls, setUrls] = useState([
    {id: 10, title: "Kayaking is tons of fun lol", author: "James Strawhead", time: 1697851928864, data: [{canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}, {canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}]}, 
    {id: 111, title: "Kayaking is tons of fun lol", author: "James Strawhead", time: 1697851928864, data: [{canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}, {canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}]}, 
    {id: 145, title: "Kayaking is tons of fun lol", author: "James Strawhead", time: 1697851928864, data: [{canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}, {canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}]}, 
    {id: 1003, title: "Kayaking is tons of fun lol", author: "James Strawhead", time: 1697851928864, data: [{canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}, {canvas: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fktoo%2F2013%2F09%2F090513TB_Kayaks.jpg&f=1&nofb=1&ipt=dbe0ce79a68ec8d81d7df20f708c8b1ffb25b1a64cdbda312dd4b6ae57266707&ipo=images', description: ''}]}
  ]);
  const [date, setDate] = useState(new Date());

  const posts = urls.map(post => (
    <Link to={`/post/${post.id}`}>
    <div key={post.id} className='post-parent'>
      <div>
        <img className='post-image' src={post.data[0].canvas} alt={post.data[0].description} />
      </div>
      <div className='post-footer'>
        <div className='circle-button like-button'>
          <img src='https://twittyr.com/res/ast/like.svg'></img>
        </div>
        <div className='post-footer-info'>
          <p className='post-title'>{post.title}</p>
          <p className='post-info'>{post.author} · {findTime(date, post.time)}</p>
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
        <img className='landing' src='/landing.png' alt=''/>

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
