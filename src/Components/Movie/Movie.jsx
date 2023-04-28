import "./Movie.css";

import { FaImdb } from "react-icons/fa";

const Movie = (props) => {
  return (
    <li className="movie">
      <div className="movie__image">
        <img src={props.image} alt="" />
      </div>
      <div className="movie__content">
        <h1 className="movie__name">{props.name}</h1>
        <p className="movie__genre">
          {props.genres.map((genre) => (
            <span>{genre}, </span>
          ))}
        </p>
        <p className="movie__point">
          <span className="movie__pointIcon">
            <FaImdb />
          </span>
          {props.rating}
        </p>
      </div>
    </li>
  );
};

export default Movie;
