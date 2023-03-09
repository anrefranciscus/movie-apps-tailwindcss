import PopularMovieNetworkRepository from "@/repositories/PopularMovieNetworkRepository";

const getPosterPath = (payload) => {
    return `https://image.tmdb.org/t/p/w500${payload}`
}
const get = () => {
    return PopularMovieNetworkRepository.get()
}

const PopularMovieService = {
    get,
    getPosterPath
}
export default PopularMovieService
