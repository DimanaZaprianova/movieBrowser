import Hero from "./Hero";
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2" my-4>
      <div className="card">
        <img
          className="card-img-top"
          src={posterUrl}
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

// TMDB API KEY = 500f8af666af6bc2c3c23efd0eda676d

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const resultsHTML = searchResults.filter(el=>(el.poster_path&&el.original_title)).map((el, i) => {
  return (<MovieCard movie={el} key={i} />);
  });
  
  if (resultsHTML.length === 0) {
    return (
      <div>
        <Hero text={title} />
        <p className="lead m-10">Oops! No rusults have been found. Please, refine your search.</p>
      </div>
    )
  }
  console.log(resultsHTML.length);
  

  return (
    <div>
      <Hero text={title} />
      
      {resultsHTML && (
        <div className="container">
          <div className="row">{resultsHTML}</div>
        </div>
      )}
   
    </div>
  );
};
export { SearchView };
