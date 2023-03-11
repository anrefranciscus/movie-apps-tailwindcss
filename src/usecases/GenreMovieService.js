import GenreMovieNetworkRepository from "@/repositories/GenreMovieNetworkRepository";

const get = () => {
  return GenreMovieNetworkRepository.get();
};

const GenreMovieService = {
  get,
};

export default GenreMovieService;
