import React from 'react';
import styled from 'styled-components';

const Banner = ({ movie }) => {
	return (
		<BannerBackground
			style={{
				backgroundImage:
					'url(' +
					`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` +
					')',
			}}
		>
			<Title>{movie.title}</Title>
			<Overview>{movie.overview}</Overview>
		</BannerBackground>
	);
};

const BannerBackground = styled.div`
	height: 750px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
	padding-left: 4%;
	background-position: 50%;
	color: #fff;

	&::before {
		position: absolute;
		left: 0;
		width: 100%;
		height: 750px;
		content: '';
		background: linear-gradient(to right, #000, transparent);
	}
`;

const Title = styled.h1`
	font-size: 80px;
	font-weight: bold;
	z-index: 1;
`;

const Overview = styled.p`
	width: 38%;
	font-size: 20px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	z-index: 1;
`;

export default Banner;
