import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"
const MovieListing = () => {
  const movies=useSelector(getAllMovies);
  console.log(movies);
  let renderMovies="";
  renderMovies=movies.Response==="True"?(movies.Search.map((movie,index)=>(<MovieCard key={index} data={movie}/>))):<h3>Error</h3>;
  return (
    <>    <div style={{cursor:"pointer"}}>
      <h2 className='movies'>Movies</h2>
    <div className='moviesList'>  {renderMovies}</div>
    </div>
    </>

  )
}

export default MovieListing