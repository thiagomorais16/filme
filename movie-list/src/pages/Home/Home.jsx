import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([]);
  //o Movies em maiusculo é uma boa prática
  //variavel vai guardar a lista de objeto

  //toda vez que vai pegar uma api, vamos precisar lidar com ela dentro de uma função acícrona,  porque 
  //o carregamento do código é muito mais rápido do que,buscar os dados da internet e voltar
  //await serve para fazer para para pegar os dados antes de executar
  async function getMovies() {
    const {data : {results},} = await MovieService.getMovies();
    
    setMovies(results)
  };
    // MovieService.getMovies()
   
  async function getMoviesSearch(movieString) {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);
    
    setMovies(results);
  }
    useEffect( () => {
      getMovies();
    }, []);
    

    useEffect( () => {
      if(searchValueProp){
        getMoviesSearch(searchValueProp);
      }
    }, [searchValueProp]);

    // ess é pior const x = new MovieService()
    // x.getMovies()
  
  return (
  <section className="Home">
    {movies.map((movie)  => (
    <div key={movie.id}>
      <MovieCard movieProp = {movie} />
    </div> 
    ))}
    </section>
  );
};
export default Home;
