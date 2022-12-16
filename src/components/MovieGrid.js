import MovieItem from "./MovieItem";

const MovieGrid = ({ items }) => {
  return (
    <div className="movie-grid">
      
      {items.map((item) => {
        return <MovieItem key={item.imdbID} item={item} />;
      })}
    </div>
  );
};

export default MovieGrid;
