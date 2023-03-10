import Http from "@/plugins/Http";
import Lazy from "@/plugins/Lazy";
import Config from "@/config/Config";
import {
  mapMovieNetworkRepositoryStructResponse,
  MovieNetworkRepositoryStructResponse,
} from "@/repositories/struct/MovieNetworkRepositoryStructResponse";

const get = async () => {
  const url = `${Config.api}/movie/popular?api_key=${Config.apiKey}`;
  const response = await Http.get(url, false, false);
  if (response.code === 200) {
    let transformedData = [];
    for (const item of response.data.results) {
      let transform = await Lazy.transform(
        item,
        new MovieNetworkRepositoryStructResponse(),
        mapMovieNetworkRepositoryStructResponse
      );
      transformedData.push(transform);
    }
    response.data.results = transformedData;
  }
  return response;
};

const PopularMovieNetworkRepository = {
  get,
};
export default PopularMovieNetworkRepository;
