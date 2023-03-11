class MovieNetworkRepositoryStructResponse {
  /**
   *
   * @type {string}
   */
  originalTitle = "";
  originalLanguage = "";
  adult = Boolean;
  backdropPath = "";
  genreMovie = [];
  id = "";
  overview = "";
  popularity = "";
  posterPath = "";
  releaseDate = "";
  title = "";
  voteAverage = "";
  voteCount = "";
}

const mapMovieNetworkRepositoryStructResponse = {
  adult: "adult",
  backdropPath: "backdrop_path",
  genreMovie: "genre_ids",
  id: "id",
  originalLanguage: "original_language",
  originalTitle: "original_title",
  overview: "overview",
  popularity: "popularity",
  posterPath: "poster_path",
  releaseDate: "release_date",
  title: "title",
  voteAverage: "vote_average",
  voteCount: "vote_count",
};

export {
  MovieNetworkRepositoryStructResponse,
  mapMovieNetworkRepositoryStructResponse,
};
