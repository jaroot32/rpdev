import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import slider2 from '../assets/images/slider2.jpg'
import slider3 from '../assets/images/slider3.jpg'
import slider4 from '../assets/images/slider4.jpg'


const content = [
	{
		title: 'The Paradigm',
		description:
		'With great attitudes come great teams with a passion for integrity dedicated to services.',
		image: slider2,
	},
	{
		title: 'Investing in People',
		description:
		'We will lead by serving, sacrificing and mentoring both in-house and in-home within our community.',
		image: slider3,
	},
	{
		title: 'Our Philosophy',
		description:
		'The name “RPD" will be synonymous with quality workmanship, quality citizenship and the leader in the industry.',
		image: slider4,
	}
];

const RPDSlideShow = () => (
	<div>
		<Slider autoplay={2000} className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						{/* <button>{item.button}</button> */}
					</div>
				</div>
			))}
		</Slider>
	</div>
);
export default RPDSlideShow
