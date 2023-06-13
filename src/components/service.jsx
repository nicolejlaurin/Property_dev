import React from 'react';
import Img1 from '../images/CN-25.png';

export default () => (
	<div class="service">
	<div class="service-text">
		<h4 class='animated reveal fade-bottom'>Our Services</h4>
		<p class='animated reveal fade-bottom'>Write a paragraph that talks about your construction company here. Convince your prospective clients to choose you and your team for their construction needs by talking about your unique services, as well as your commitment to getting the job done.</p>
	</div>
		<div class="container">
		<div class="inner-container">
		<h4>Pre Construction</h4>
    <div class="item pre animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<img src={Img1} alt=""></img>
		<p>• Develop project concept, design, and detailed plans.</p>
		<p>• Purchase suitable land for construction.</p>
		<p>• Obtain necessary permits and approvals from local government authorities.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Construction</h4>
    <div class="item present animated reveal fade-bottom"> <span class="icon feature_box_col_two"></span>
		<img src={Img1} alt=""></img>
		<p>• Prepare the site, construct foundation and build structural frame.</p>
		<p>• Install exterior and interior features, carry out necessary installations like electrical, plumbing, and HVAC.</p>
		<p>• Arrange for periodic inspections for compliance and finish exterior work including landscaping.</p>
    </div>
		</div>
		<div class="inner-container">
		<h4>Post Construction</h4>
    <div class="item post animated reveal fade-bottom"> <span class="icon feature_box_col_three"></span>
		<img src={Img1} alt=""></img>
		<p padding-top={'3rem'}>• Arrange for a final inspection and obtain an occupancy permit.</p>
		<p>• Address any issues or deficiencies.</p>
		<p>• Provide post-construction services as agreed in contracts.</p>
    </div>
		</div>
		</div>

	</div>
);
