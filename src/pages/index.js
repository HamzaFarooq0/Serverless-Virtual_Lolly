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
				<Lolly lollyTop={'#C22671'} lollyMid={'#D92A3A'} lollyBot={'#D51020'} />
				<Lolly lollyTop={'#97e665'} lollyMid={'#8ccb4c'} lollyBot={'#a8d838'} />
				<Lolly lollyTop={'#cd2753'} lollyMid={'#d5cfd1'} lollyBot={'#5ba3da'} />
				<Lolly lollyTop={'#feefd6'} lollyMid={'#b65ae4'} lollyBot={'#c116c1'} />
				<Lolly lollyTop={'#ed265b'} lollyMid={'#f77249'} lollyBot={'#a8d838'} />
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
