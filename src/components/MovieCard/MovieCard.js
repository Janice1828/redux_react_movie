import React from 'react'
import "./MovieCard.scss";
const MovieCard = (props) => {
  const {data}=props;
  return (
    <div className='movieCard'>
      <img src={data.Poster} alt='Image'/>
<h3 className='text-light'>{data.Title}</h3>
<p>{data.Year}</p>
    </div>
  )
}

export default MovieCard