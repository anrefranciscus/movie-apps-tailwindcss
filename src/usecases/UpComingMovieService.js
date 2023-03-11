import UpComingMovieNetworkRepository from "@/repositories/UpComingMovieNetworkRepository";

const get = () => {
  return UpComingMovieNetworkRepository.get();
};

const UpComingMovieService = {
  get,
};

export default UpComingMovieService;
