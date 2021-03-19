// INTERFACE -> ESTÁ NO APP.TSX
import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";
interface MoviesPropriets {
  movieData: MovieProps[];
  onSelectMovieId: string

}

export function Content({movieData, onSelectMovieId}:MoviesPropriets) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {onSelectMovieId}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movieData.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
