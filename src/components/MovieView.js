
import Hero from "./Hero";
import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";


const MovieView = () => {
    const {id} = useParams();

    const [movieDetails, setMovieDetails] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate ();


    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=500f8af666af6bc2c3c23efd0eda676d&language=en-US`)
    .then(response => response.json())
    .then(data => {
        setMovieDetails(data)
        setIsLoading(false)
    })
    .catch(err => {
        if (err.code === 404)
        {
            navigate('/page404');
        }
    });
    
}, [id])

    function renderMovieDetails(){
        if(isLoading) {
            return <Hero text="Loading..."/>
        }
        if(movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return (
                <>
                    {backdropUrl&&
                        <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    }
                    {posterPath&&movieDetails.original_title&&movieDetails.overview&&
                    <div className="container my-5" >
                        <div className="row"> 
                            <div className="col-md-3">
                                {{posterPath}?<img src={posterPath} alt="..." className="img-fluid shadow rounded"/>:<p>More details coming soon</p>} 
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
                                <a href={movieDetails.homepage} className="lead">Visit Home Page</a>
                            </div>
                        </div>
                    </div>
                    }
            </>
            )
        }
    }

    return renderMovieDetails()
     
    };

export default MovieView; 