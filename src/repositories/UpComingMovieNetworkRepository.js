import Config from "@/config/Config";
import Http from "@/plugins/Http";
import Lazy from "@/plugins/Lazy";
import {
  mapMovieNetworkRepositoryStructResponse,
  MovieNetworkRepositoryStructResponse,
} from "@/repositories/struct/MovieNetworkRepositoryStructResponse";

const get = async () => {
  const url = `${Config.api}/movie/upcoming?ap_key=${Config.apiKey}`;
  const res = await Http.get(url, false, false);
  if (res.code === 200) {
    let transformedData = [];
    for (const item of res.data.results) {
      let transform = await Lazy.transform(
        item,
        new MovieNetworkRepositoryStructResponse(),
        mapMovieNetworkRepositoryStructResponse
      );
      transformedData.push(transform);
    }
    res.data.results = transformedData;
  }
  return res;
};

const upComingMovieNetworkRepository = {
  get,
};

export default upComingMovieNetworkRepository;
