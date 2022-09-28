import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</Provider>
);

// 1. 3 pages: home page, movie page, movie detail page
// 2. homepage has a banner
// 3. You can see three big categories of movies in the homepage: popular, top rated, and upcoming movies
// 4. On movie hover, you can see the title, genre, rating, views, and age censur
// 5. Movie slide leets you see the other movies

// 6. Movie detail page provides detailed info: poster, title, overview, rating, views, age censur, running time, etc.
// 7. you can see the movie trailer if you click on 'watch trailer'
// 8. you can see the movie reviews
// 9. you can see related movies

// 10. You can search a movie.
// 11. you can sort movies.
// 12. you can filter movies.
