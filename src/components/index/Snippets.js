import React from 'react'
import "./Snippets.css";

import ImgComputer from '../../images/image-computer.png'

export default function Snippets() {
  return (
    <div className="snippets-section">
      <div className="snippets-main">
        <h2 className="snippets-title">Keep track of your snippets</h2>

        <p className="snippets-text">
          Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your
          devices. Our Mac and iOS apps will help you organize everything.
        </p>
      </div>

      <div className="snippets-content">
        <img className="snippets-img" src={ImgComputer} alt="Computer showing the Clipboard app"/>

        <div className="snippets-features">
          <div className="snippets-feature">
            <h3 className="snippets-subtitle">
              Quick Search
            </h3>
            <p className="snippets-text">
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </div>
          <div className="snippets-feature">
            <h3 className="snippets-subtitle">
              iCloud Sync
            </h3>
            <p className="snippets-text">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="snippets-feature">
            <h3 className="snippets-subtitle">
              Complete History
            </h3>
            <p className="snippets-text">
              Retrieve any snippets from the first moment you started using the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
