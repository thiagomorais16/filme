import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/MovieService";

const MovieDetail = () => {
  const { id } =  useParams();
  const [movie, setMovie] = useState ({});

  async function getMovie(){
    const {data} = await MovieService.
    getMovieDetails(id);
   setMovie(data);
  }
  useEffect(() => {
   getMovie();
  },[])

  useEffect( () => {
   console.log(movie);
  });

  return (
    <div className="MovieDetail">
      <section className="MovieDetail">
        <div className="MovieDetail__container">
          <div className="MovieDetail__col">
            <h1 className="MovieDetail__title">{MovieDetail.title}</h1>
            <div className="MovieDetail__image">
                   <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                        alt="" 
                 />
              </div> 
          </div>
            <div className="MovieDetail__col">
              <div className="MovieDetail__details">
                <div className="MovieDetail__detail">
                  <span>Budget:</span> {movie.budget}
                </div>
              <div className="MovieDetail__detail">
                <span>Idioma Original:</span>{movie.original_language}
              </div>
              <div className="MovieDetail__detail">
                <span>Popularidade:</span> {movie.popularity}
              </div>
              <div className="MovieDetail__detail">
                <span>Overvieew:</span> {movie.overview}
              </div>
              </div>
              <Link to={"/"} className= "MovieDetail__button" > 
              VOLTAR 
              </Link>
            </div>
        </div>
      </section>
      </div>
  )
}

export default MovieDetail