import React from 'react';
import { Link }  from 'react-router-dom';
import 'animate.css';
import Video from './drake.mp4';


export default () => (
	<div className='landing'>
		<div className='info'>

		<iframe src={Video} onloadedmetadata="this.autoplay = true" allow="autoplay" id="myVideo" type="video/mp4">
			<video controls="false">
			  <source src={Video} allow="autoplay" type="video/mp4" onloadedmetadata="this.autoplay = true" allow="autoplay"/>
			</video>
		</iframe>

<div class="overlay">
		<h2>
		New Wave
		</h2>
		<h3>Property Group</h3>
			<p class="animated fadeInUp">We take your dream home and make it real.</p>
			<Link to='/contactpage'>
			<button className="button1">BOOK YOUR CONSULTATION</button>
			</Link>
		</div>
		</div>
	</div>
);
