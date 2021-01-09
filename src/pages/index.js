import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Lolly from '../components/Lolly';
import { Link } from 'gatsby';

const Home = () => {
	return (
		<div className="homepage-container">
			<div>
				<Header
					head="Virtual Lolly"
					head_class="heading"
					para="because we all know someone who deserve some sugar!"
					para_class="sub-heading"
				/>
			</div>

			<div className="displaylolly-container">
				<Lolly top={'#C22671'} middle={'#D92A3A'} bottom={'#D51020'} />
				<Lolly top={'#97e665'} middle={'#8ccb4c'} bottom={'#a8d838'} />
				<Lolly top={'#cd2753'} middle={'#d5cfd1'} bottom={'#5ba3da'} />
				<Lolly top={'#feefd6'} middle={'#b65ae4'} bottom={'#c116c1'} />
				<Lolly top={'#ed265b'} middle={'#f77249'} bottom={'#a8d838'} />
			</div>

			<div className="homebtn-div">
				<Link to="/createNew">
					<Button button_val="Let's create one" button_class="homepage-btn" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
