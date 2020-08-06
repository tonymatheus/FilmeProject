import axios from "axios";

const apiKey = "7bbea00a2df04ac98a6a93be1f6681a8";
const url = "htpps://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRateUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      api_key: apiKey,
      language: "pt_BR",
      page: 1,
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";

    const modifiedData = data["results"].map((movie) => ({
      id: movie["id"],
      backPoster: posterUrl + movie["backdrop_path"],
      popularity: movie["popularity"],
      title: movie["title"],
      poster: posterUrl + movie["poster_path"],
      overview: movie["overview"],
      rating: movie["voting_avarage"],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchGenre = () => {};
export const fetchMoviesByGenre = () => {};
export const fetchPersons = () => {};
export const fetchTopRatedMovie = () => {};
export const fetchMovieDetail = () => {};
export const fetchMovieVideos = () => {};
export const fetchCasts = () => {};
export const fetchSimilarMovie = () => {};
