import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBannerImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Work from './Work';

export default function About() {
  return (
    <>
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBannerImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore soluta in est possimus eveniet alias officiis quidem sit fugiat.
            </p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt corporis consequuntur eos ex voluptatum.
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'> <BsFillPlayCircleFill/> Watch Video</button>
            </div>
        </div>
    </div>
    <Work/>
    </>
  )
}
