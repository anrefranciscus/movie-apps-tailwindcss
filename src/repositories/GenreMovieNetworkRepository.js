import Config from "@/config/Config";
import Http from "@/plugins/Http";
import Lazy from "@/plugins/Lazy";
import {
  GenreMovieRepositoryStructResponse,
  mapGenreMovieNetworkStructResponse,
} from "@/repositories/struct/GenreMovieRepositoryStructResponse";
const get = async () => {
  const url = `${Config.api}/genre/movie/list?api_key=${Config.apiKey}&language=en-US`;
  const response = await Http.get(url, false, false);
  if (response.code === 200) {
    let newData = [];
    for (const item of response.data.genres) {
      let transform = await Lazy.transform(
        item,
        new GenreMovieRepositoryStructResponse(),
        mapGenreMovieNetworkStructResponse
      );
      newData.push(transform);
    }
    response.data.genres = newData;
  }
  return response;
};

const GenreMovieNetworkRepository = {
  get,
};
export default GenreMovieNetworkRepository;
