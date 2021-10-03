import React from "react";
import "./HeroSection.css";
import "./bg-video.scss";
import video from "../images/video.mp4";
import "./App.css";
import logo from "../images/logo-white.png";

function BackgroundVideo() {
  return (
    <div className="hero-container">
      <video className="bg-video_content" autoPlay loop muted>
        <source src={video} type="video/mp4" />{" "}
      </video>
      {/* <img src={logo} /> */}
      <h1>CARS DEN</h1>
    </div>
  );
}

export default BackgroundVideo;
