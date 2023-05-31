import React from 'react';
import Img_logo from '../images/CN-28.jpg';
import Icon_logo from '../images/right-arrow.png';
import { FaCaretRight, FaChevronRight, FaAngleDoubleRight} from 'react-icons/fa';
import { Link }  from 'react-router-dom';
import './scroll'

export default () => (
	<div className='sports'>
	<div class='animated reveal fade-bottom'>
	<h4>How We Provide</h4>
	<p>Sports marketing is constantly evolving and endorsements are becoming more lucrative. We help build personal brands and synergize corporate brands through talent partnerships. Taking the entrepreneurial approach to prepare our athletes for life after sports.</p>
		<div class="sports-split">
		<div className="sports-split-left">
			<img class="sports-img" src={Img_logo}></img>
			<Link to='/contactpage'>
			<button class="button3" >BOOK YOUR CONSULTATION</button>
			</Link>
			</div>
			<div class="whatwedo-list">
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Sponsorships</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Partnerships</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Endorsements</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> NILs - Name, Image, Likeness </p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Activations </p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Branding</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Commercials and Radio</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Campaigns</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Social Media Management</p>
			<p><FaChevronRight className="sports-icon"></FaChevronRight> Personalized Content Creation</p>
		</div>
		</div>
	</div>
	</div>
);
