import React from 'react';
import { FaLaravel, FaUsb, FaWeixin, FaCalendarCheck, FaChartLine, FaCode, FaCodeBranch} from 'react-icons/fa';


export default () => (
	<div class="service">
	<h4 class='animated reveal fade-bottom'>What We Provide</h4>
		<div class="container">
    <div class="item man animated reveal fade-bottom"> <span class="icon feature_box_col_one"></span>
		<br></br>
		<FaChartLine className="service-icons" color={'black'} ></FaChartLine>
    <h4>Management</h4>
		<p>
		Pro-Found has formed many relationships across the basketball industry ranging from the NBA, FIBA, International, etc. Our management team works closely with our clients to maximize the opportunities we can provide with a wide variety of resources on and off the court.
		</p>
    </div>

    <div class="item mark animated reveal fade-bottom"> <span class="icon feature_box_col_two"></span>
		<br></br>
    <FaCode className="service-icons"></FaCode>
    <h4>Marketing</h4>
    <p>
		Pro-Found believes each and every client deserves hands-on attention. Our dynamic marketing strategy primarily focuses on finding our clients the best fit and organic brand partnerships. We want to ensure that every opportunity provided can lead to fruitful and long-lasting relationships. We assist our clients with professional marketing, media, branding, and public relations.We believe in bringing your brand and entrepreneurial spirit to life.
		  </p>
    </div>

    <div class="item cons animated reveal fade-bottom"> <span class="icon feature_box_col_three"></span>
		<br></br>
    <FaWeixin className="service-icons"></FaWeixin>
    <h4>Consultation</h4>
    <p>
		Our company takes pride in creating and implementing the right marketing strategies for our clients and brands. Pro-Found will advise our clients with marketing plans and tactics to help you achieve your business goal, target markets, and marketing campaigns. Please contact us if you have any questions or would like to consult with us in further detail about our personalized services.
    </p>
    </div>
		</div>
	</div>
);
