import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const MovieCard = ({ item, image }) => {
	const { genreList } = useSelector((state) => state.movie);

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
			<Overlay>
				<MovieTitle>{item.title}</MovieTitle>
				<ExtraInformation>
					<Votes>{item.vote_average} Rating</Votes>
					<Rating>{item.adult === true ? 'R18' : 'G'}</Rating>
				</ExtraInformation>

				<Genre>
					{item.genre_ids.map((id) => (
						<Badge bg="danger" key={id} style={{ marginRight: '5px' }}>
							{genreList.find((item) => item.id === id).name}
						</Badge>
					))}
				</Genre>
			</Overlay>
		</CardBackground>
	);
};

const CardBackground = styled.div`
	width: 250px;
	height: 140px;
	border-radius: 3px;
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	padding: 15px 10px;
	opacity: 0;
	font-family: inherit;

	&:hover {
		opacity: 1;
		background: rgba(43, 41, 41, 0.7);
	}
`;

const MovieTitle = styled.h1`
	color: #fff;
	font-size: 20px;
`;

const ExtraInformation = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	line-height: normal;
`;

const Votes = styled.div`
	color: #0be881;
	font-size: 16px;
	font-weight: bold;
`;

const Rating = styled.div`
	border: 1px solid #fff;
	padding: 0 8px;
	color: #fff;
	font-size: 15px;
`;

const Genre = styled.div`
	position: absolute;
	left: 10px;
	bottom: 10px;
`;

export default MovieCard;
