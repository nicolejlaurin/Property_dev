import React from 'react';
import Img_logo from '../images/about-section.jpg';
import SecondPage from './aboutpage';
import Arrow from '../images/arrow.png';
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
        At New Wave Property Group, we're not just constructing buildings, we bring dreams to life.
        Each investment we receive signifies a step towards a more prosperous Canada.
        It's about strengthening our communities, supporting our neighbours, and creating a brighter future for the next generation.
        Together, we are not only amassing wealth for individual families but weaving the very fabric of our nation,
        promising a fruitful tomorrow for our next generation.
        Join us, step by step, brick by brick - as we progressively turn every Canadian's dream of owning a home into reality.

  </p>
        <Link to='/aboutpage'>
          <button className="button2" >Learn more           <BsArrowRight class= "arrow-image" width={'2rem'}></BsArrowRight> </button>
        </Link>
      </div>
      <img class= "about-image" src={Img_logo}></img>
    </div>
  </div>


);
}
