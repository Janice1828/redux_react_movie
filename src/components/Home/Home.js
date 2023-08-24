import React, { useEffect } from 'react'
import movieApi from "../../common/api/MovieApi";
import {APIKey} from "../../common/api/MovieApiKey"
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
const Home = () => {
  const movieText="Harry";
  const dispatch=useDispatch();
  useEffect(()=>{
   
    const fetchMovies=async()=>{
      const response=await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log("error is",err);
      })
     dispatch(addMovies(response.data))
    }
    fetchMovies();
  },[])
  return (
    
    <div>
      <MovieListing/>
    </div>
  )
}

export default Home;