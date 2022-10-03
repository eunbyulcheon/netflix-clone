import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/MovieAction';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import styled from 'styled-components';

const Home = () => {
	const dispatch = useDispatch();
	const { loading, popularMovies, topRatedMovies, upcomingMovies } =
		useSelector((state) => state.movie);

	useEffect(() => {
		dispatch(movieAction.getMovies());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <ClipLoader color="#fff" loading={loading} size={150} />;
	}

	return (
		<>
			<Banner movie={popularMovies.results[0]} />

			<MoviesDisplay>
				<PopularSection>
					<Category>Top Popular Movies</Category>
					<MovieSlide movies={popularMovies.results} />
				</PopularSection>

				<TopRatedSection>
					<Category>Top Rated Movies</Category>
					<MovieSlide movies={topRatedMovies.results} />
				</TopRatedSection>

				<UpcomingSection>
					<Category>Upcoming Movies</Category>
					<MovieSlide movies={upcomingMovies.results} />
				</UpcomingSection>
			</MoviesDisplay>
		</>
	);
};

const MoviesDisplay = styled.div`
	margin: 5% 4%;
	display: flex;
	flex-direction: column;
	gap: 70px;
`;

const Category = styled.h3`
	margin-bottom: 20px;
	color: #fff;
	font-size: 24px;
`;

const PopularSection = styled.div``;

const TopRatedSection = styled(PopularSection)``;

const UpcomingSection = styled(PopularSection)``;

export default Home;
