
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

import { SearchList } from '@/components/search/SearchList'
import { getMovieByName } from '../components/search/getMovieByName'
import VisualCard from "../components/VisualCard";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Buscar() {

  const router = useRouter()
  const searchValue = router.query.searchValue
  //const { searchValue } = props
  const [movies, setMovies] = useState([]);

useEffect(() => {
  getMovieByName(searchValue)
  .then( movies => setMovies(movies))
 // console.log(movies)
},
[searchValue]);

const filteredMovies = movies.filter(movie => movie.poster_path !==null)
 console.log(filteredMovies)
  return (
    <>
      <h1 className='m-0 p-2 text-center text-white bg-dark'>Buscar película por nombre</h1>
      <main className='container-fluid  movies__container justify-center'>
        <SearchList movies={filteredMovies} />
        {/* { filteredMovies?.length === 0 && <h3 className='text-light'> Película no encontrada </h3> } */}
        {/* { filteredMovies?.map(movie => (
          <VisualCard key={movie.id} {...movie}></VisualCard>

          // <div className="card-body text-white text-center p-4" key={movie.id}>
          //   <h6 className='text-white text-break'>{movie.title}</h6>
          //   <img src={movie.poster_path !==null ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`: './noDisponible.png'}
          //       alt={movie.title}
          //       className="card-img-top poster__movie"/>
          // </div>
        ))
      } */}
      </main>
    </>
  )
}