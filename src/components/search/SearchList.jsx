import React from 'react'

export const SearchList = ( {movies}) => {

    console.log(movies)
  return (
    <>

      {
        movies.map(movie => (
          <div className="card-body text-white text-center p-4" key={movie.id}>
            <h6 className='text-white text-break'>{movie.title}</h6>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top poster__movie"/>
          </div>
        ))
      }


    </>
  )
}
