import React, { use } from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios';
export default function MovieDetails() {
  const {id} = useParams();
  const [movie,setMovie] = useState({});

  useEffect(function(){
    async function getMovie(){
      try {
        let res = await axios.get(`https://ghibliapi.vercel.app/films/${id}`);
        console.log(res.data);
        setMovie(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    getMovie();
  },[])

  return (
    <div>
      <nav className='navbar p-2 bg-dark navbar-dark'>
        <Link to={'/'} className='navbar-brand'>Home &#x2190; </Link>
      </nav>
        <img src={movie.movie_banner} className='img-fluid movieBanner' alt="moviebanner" />
        <div className="container-fluid p-5">
           <div className="row">
              <div className="col-sm-6 p-3">
                  <h1 className='display-2'>{movie.title}</h1>
                  <h2 className='display-3'>{movie.original_title}</h2>
                  <img src={movie.image} alt="" className='img-fluid' />
              </div>
              <div className="col-sm-6 p-3">
                 <h2>About</h2>
                 <p>{movie.description}</p>
                 <h2>Director</h2>
                 <p><i>{movie.director}</i></p>
                 <h2>Producer</h2>
                 <p><i>{movie.producer}</i></p>
                 <h2>release date</h2>
                 <p>{movie.release_date}</p>
                 <h2>Running time</h2>
                 <p>{movie.running_time} mins</p>
              </div>
           </div>
        </div>
    </div>
  )
}
