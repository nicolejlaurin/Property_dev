import React from 'react';
import Img_logo from '../images/about-section.jpg';
import SecondPage from './aboutpage';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import './scroll'


export default function About() {
  return (
	<div className='about-section'>
    <div class='about-split animated reveal fade-bottom'>
      <div class='about-split-left'>
        <h4>
        The foundation on which you build your life
        </h4>
    		<p>
        At New Wave Property Group, we’re not simply a partner to our communities — we’re a part of them.
        That means collaborating with the places where we work, customizing developments to meet the neighborhoods’ specific needs, and identifying the highest and best use for each property — all while keeping each local community's best interest front and center.
        </p>
        <Link to='/aboutpage'>
          <button className="about-button button2" >Learn more -></button>
          <link src={BsArrowRight}></link>

        </Link>
      </div>
      <img class= "about-image" src={Img_logo}></img>
    </div>
  </div>


);
}
