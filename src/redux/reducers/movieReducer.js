const initialState = {
	popularMovies: {},
	topRatedMovies: {},
	upcomingMovies: {},
};

function movieReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'GET_MOVIE_LIST':
			return {
				...state,
				popularMovies: payload.popularMovies,
				topRatedMovies: payload.topRatedMovies,
				upcomingMovies: payload.upcomingMovies,
			};
		default:
			return { ...state };
	}
}

export default movieReducer;
