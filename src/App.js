import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from '../src/pages/Home';
import Movies from '../src/pages/Movies';
import MovieDetail from '../src/pages/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/movies/:id" element={<MovieDetail />} />
			</Routes>
		</>
	);
}

export default App;
