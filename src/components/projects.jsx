import React from 'react';
import Img1 from '../images/project1.jpg';
import Img2 from '../images/project2.jpg';
import Img3 from '../images/project3.jpg';
import Img4 from '../images/project4.jpg';
import Img5 from '../images/project5.jpg';
import Img6 from '../images/project6.jpg';


export default () => (
	<div className='sports'>
	<div class='animated reveal fade-bottom'>
	<h4>Recent Projects</h4>
	<p>Sports marketing</p>
		<div class="sports-split">
				<img class="sports-img" src={Img1}></img>
				<img class="sports-img" src={Img2}></img>
				<img class="sports-img" src={Img3}></img>
				<img class="sports-img" src={Img4}></img>
				<img class="sports-img" src={Img5}></img>
				<img class="sports-img" src={Img6}></img>
		</div>
	</div>
	</div>
);
