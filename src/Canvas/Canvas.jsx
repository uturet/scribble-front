import React, { useState } from 'react'
import DrawingCanvas from './DrawingCanvas';
import {uploadFile} from './Api'
import { Link } from 'react-router-dom';

function Canvas() {
  const [getImage, setGetImage] = useState(() => {})
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const createPost = () => {
    uploadFile(getImage(), title, setMessage)
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
              <Link to={'..'}>
                <div className='back-button back-view'>
                  <img src="/back.png" alt=''/>
                </div>
              </Link>
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
          <DrawingCanvas
            setGetImage={setGetImage}/>
        </div>
        <p>{message}</p>

      </div>
    </>
  )
}

export default Canvas
