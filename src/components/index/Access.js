import React from 'react'
import "./Access.css";

import ImgDevices from '../../images/image-devices.png'

export default function Access() {
  return (
    <div className="access-section">
      <h2 className="access-title">
        Access Clipboard Anywhere
      </h2>

      <p className="access-text">
          Whether you’re on the go, or at your computer, you can access all your Clipboard 
          snippets in a few simple clicks.
      </p>

      <img className="access-img" src={ImgDevices} alt="A smartphone and a tablet showing the Clipboard app"/>
    </div>
  )
}
