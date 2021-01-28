import React from 'react'
import "./Download.css";

export default function Download() {
  return (
    <div className="download-section">
      <h2 className="download-title">
        Clipboard for iOS and Mac OS
      </h2>

      <p className="download-text">
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
        and you’re ready to start adding to your clipboard.
      </p>

      <div className="download-buttons">
        <div className="btn btn--green">
          Download for iOS
        </div>
        <div className="btn btn--blue">
          Download for Mac
        </div>
      </div>
    </div>
  )
}
