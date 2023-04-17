import axios from 'axios' 

//base que se encontra na setting o http onde estão todos os dados
// api_key é a chave do api
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "22a19d371a46b102f4bbaa4128590dd1";

//fizemos $ com uma constante visto que dps 3/ pode mudar e concatemos com a filha no caso a chave api_key
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;


export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }
//adicionar objeto que altomaticamente procure os detalhes pelo seu id
   static getMovieDetails(id) {
        return axios(withBaseUrl(`movie/${id}`));
    }
// static só pode ser chamado apenas no movie service precisa movieServi().
    static searchMovies(movie){
        return axios(withBaseUrl("search/movie") + `&query=${movie}`);
    }
}