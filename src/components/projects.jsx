import React from 'react';
import { Link }  from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import Img1 from '../images/project1.jpg';
import Img2 from '../images/project2.jpg';
import Img3 from '../images/project3.jpg';
import Img4 from '../images/project4.jpg';
import Img5 from '../images/project5.jpg';
import Img6 from '../images/project6.jpg';


export default () => (
	<div className='project'>
	<div class='animated reveal fade-bottom'>
	<h4>Explore Our Projects</h4>
	<Link to='/aboutpage'>
		<button className="button2" >View more <BsArrowRight class= "arrow-image" width={'2rem'}></BsArrowRight> </button>
	</Link>
		<div class="project-split">
				<img class="project-img" src={Img1}></img>
				<img class="project-img" src={Img2}></img>
				<img class="project-img" src={Img3}></img>
				<img class="project-img" src={Img4}></img>
				<img class="project-img" src={Img5}></img>
				<img class="project-img" src={Img6}></img>
		</div>
	</div>
	</div>
);
