import Config from "@/config/Config";
import Http from "@/plugins/Http";
const get = () => {
  const url = `${Config.api}/genre/movie/list?api_key=${Config.apiKey}&language=en-US`;
  return Http.get(url, false, false);
};

const GenreMovieNetworkRepository = {
  get,
};
export default GenreMovieNetworkRepository;
