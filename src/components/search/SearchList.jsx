import React from 'react'
import VisualCard from "../VisualCard";
import {imagen} from '../../../public/noDisponible.png'


export const SearchList = ( {movies}) => {

   // console.log(movies)
  return (
    <>
      {movies.length === 0 && <h3 className='text-light'> Pelicula no encontrada </h3>}
      {
        movies?.map(movie => (
          <VisualCard key={movie.id} {...movie}></VisualCard>

          // <div className="card-body text-white text-center p-4" key={movie.id}>
          //   <h6 className='text-white text-break'>{movie.title}</h6>
          //   <img src={movie.poster_path !==null ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: './noDisponible.png'}
          //       alt={movie.title}
          //       className="card-img-top poster__movie"/>
          // </div>
        ))
      }
    </>
  )
}
