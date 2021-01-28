import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-logo">
        <svg viewBox="0,0,125,125" width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/></g></svg>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">A history of everything you copy</h1>
        <p className="hero-text">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <div className="hero-buttons">
        <div className="btn btn--green">
          Download for iOS
        </div>
        <div className="btn btn--blue">
          Download for Mac
        </div>
      </div>
    </div>
  );
}
