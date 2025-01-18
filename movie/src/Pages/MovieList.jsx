import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function MovieList() {
    const [movies,setMovies] = useState([]);
    useEffect(function(){
        async function getMovies(){
          try {
            let res = await axios.get('https://ghibliapi.vercel.app/films');
            setMovies(res.data);
          } catch (error) {
            console.log(error)
          }
        }
        getMovies();
    },[])

    const navigate  = useNavigate();
  return (
    <div>
        <h1 className='display-1 text-center p-4'>Ghibli Studio Movies</h1>
        <div className="container">
            <div className="row">
                {
                  movies.map(movie=>(
                    <div className="col-sm-4 p-3" key={movie.id}>
                        <div className="card" role='button' onClick={()=>{navigate(`/movie/${movie.id}`)}}>
                           <img src={movie.image} alt="" className='card-img-top' />
                           <h4 className='card-body'>{movie.title}</h4>
                        </div>
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}


