const MovieItem = ({ item }) => {
  return (
    <div className="movie">
      <div className="movie-image">
        <img src={item.Poster} alt={item.Title} />
      </div>
      <div className="movie-title">
        <h2>{item.Title}</h2>
      </div>
      <div className="year">{item.Year}</div>
    </div>
  );
};

export default MovieItem;
