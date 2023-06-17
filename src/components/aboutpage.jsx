import React from 'react';
import Img from '../images/testimony1.png';

export default () => (

	<div className='aboutpage-CN'>
		<div className='abt-back'>
			<h4>
			ABOUT US
			</h4>
			<p>
			New Wave Property Group is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
	    </p>
		</div>
		<div className='abt-back2'>
			<h4> Our Values</h4>
			<hr className="underline"></hr>
			<div className='abt-p'>
				<div>
					<h5> Integrity </h5>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
				</div>
				<div>
					<h5> Respect </h5>
					<p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
				</div>
				<div>
					<h5> Inclusiveness </h5>
					<p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
				</div>
			</div>
		</div>
		<div className="aboutpage-split">
			<img src={Img} id="about-img"></img>
			<div className="aboutpage-text">
				<h4 class="name"> Founder</h4>
				<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.				</p>
			</div>
		</div>
	</div>
);
