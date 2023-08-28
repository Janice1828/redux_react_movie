import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"
const MovieListing = () => {
  const movies=useSelector(getAllMovies);
  
  let renderMovies="";
  renderMovies=movies.Response==="True"?(movies.Search.map((movie,index)=>(<div className='col-12 col-md-6 col-xl-4 col-xxl-3' key={index}><MovieCard data={movie}/></div>))):<h3>Error</h3>;
  return (
    <>    <div style={{cursor:"pointer"}}>
      <h2 className='movies'>Movies</h2>
    <div className='moviesList row p-0 m-0 gy-3'> 
     {renderMovies}</div></div>
    </>

  )
}

export default MovieListing