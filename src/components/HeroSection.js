import React from 'react';
import './HeroSection.css';
import '../App.css';
// import mainImage from '../images/IMG_2216.jpg';

function HeroSection() {
  return (
    <div className='heroContainer'>
        <video src= {require('../videos/video-2.mp4')} autoPlay loop muted />
        {/* <img src={mainImage} alt='osan'></img> */}
        {/* <img src= {require('../images/IMG_2216.jpg')} alt='osan' /> */}
        <h1>Adventure Awaits</h1>
        <p> what are you waiting for</p>
        <div className='heroBtns'>
            <button className='btns-learn-more'>Learn more</button>
        </div>
    </div>
  )
}

export default HeroSection;