import React from 'react';
import styled from 'styled-components';

const MovieCard = ({ item, image }) => {
	return (
		<CardBackground
			style={{
				backgroundImage:
					'url(' +
					`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${image}` +
					')',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}
		>
			MovieCard
		</CardBackground>
	);
};

const CardBackground = styled.div`
	width: 250px;
	height: 140px;
	border-radius: 3px;
`;

export default MovieCard;
