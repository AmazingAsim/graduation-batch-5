import './App.css';
import MovieDetails from './Pages/MovieDetails';
import MovieList from './Pages/MovieList';
import {HashRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <HashRouter>
            <Routes>
                <Route path="/" element={<MovieList/>}/>
                <Route path="/movie/:id" element={<MovieDetails/>}/>
            </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
