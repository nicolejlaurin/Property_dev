import React from 'react';
import { Link }  from 'react-router-dom';
import 'animate.css';


export default () => (
	<div className='landing'>
		<h2>
		New Wave Property Group
		</h2>
		<div className='info'>
			<p class="animated fadeInUp">We take your dream home and make it real.</p>
			<Link to='/contactpage'>
			<button className="button1">BOOK YOUR CONSULTATION</button>
			</Link>


		</div>
	</div>
);
