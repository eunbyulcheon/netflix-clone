import React from 'react';
import MovieCard from './MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 6,
		slidesToSlide: 6,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const MovieSlide = ({ movies }) => {
	return (
		<>
			<Carousel infinite={true} partialVisible={true} responsive={responsive}>
				{movies.map((item) => (
					<MovieCard key={item.id} item={item} image={item.poster_path} />
				))}
			</Carousel>
		</>
	);
};

export default MovieSlide;