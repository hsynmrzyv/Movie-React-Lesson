import "./App.css";

// Data
import { movies as moviesData } from "./data";

// Hooks
import { useState } from "react";

// Components
import Button from "./Components/Button/Button";
import Movie from "./Components/Movie/Movie";

const categories = [...new Set(moviesData.map((movie) => movie.genres).flat())];

console.log(categories);

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  return (
    <div className="app">
      <h1 className="app__title">Movies App</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <Button catergory={category} key={index}>
            {category}
          </Button>
        ))}
      </div>
      <ul className="movies">
        {movies.map((movie) => (
          <Movie
            name={movie.name}
            image={movie.image}
            rating={movie.imdb}
            genres={movie.genres}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
