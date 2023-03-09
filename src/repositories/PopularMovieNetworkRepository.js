import Http from "@/plugins/Http";
import Lazy from "@/plugins/Lazy";
import Config from "@/config/Config";
import {
  mapPopularMovieNetworkRepositoryStructResponse,
  PopularMovieNetworkRepositoryStructResponse,
} from "@/repositories/struct/PopularMovieNetworkRepositoryStructResponse";

const get = async () => {
  const url = `${Config.api}/movie/popular?api_key=${Config.apiKey}`;
  const response = await Http.post(url, false, false, false);
  if (response.code === 200) {
    let transformedData = [];
    for (const item of response.data.results) {
      let transform = await Lazy.transform(
        item,
        new PopularMovieNetworkRepositoryStructResponse(),
        mapPopularMovieNetworkRepositoryStructResponse
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
