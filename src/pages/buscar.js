
import { useState, useEffect } from "react";
import { SearchList } from '@/components/search/SearchList';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Buscar() {

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState( []);


  const getMovieByName = async (searchValue) => {
    const API_KEY = "5cfb6e84540e60dcfb925c8dbfcd1aca";
    const url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`

    try {
      const response = await fetch(url);
      const data = await response.json();

      //console.log(data.results);

     if (data.results) {
      setMovies(data.results);
       return {movies: data}
    }


    } catch (error) {
      throw new Error('error searching movies')

    }

}

const handlerClick = (e)=>{
  e.preventDefault;
 // setSearchValue(e.target.value)
  getMovieByName(searchValue)
}
const handlerSubmit = async(e)=>{
  e.preventDefault()
  getMovieByName(searchValue)
}

useEffect(() => {
  getMovieByName(searchValue);
},
[]);


  return (
    <>
      <h1 className="m-0 p-2 text-center text-white bg-dark">Buscar película por nombre</h1>
        <div className='d-flex justify-content-center align-items-center bg-dark'>
         <Form className="d-flex col col-sm-4" onSubmit={handlerSubmit} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-auto"
              aria-label="Search"
              value={searchValue}
             // onChange = {handlerOnChance}
              onChange={(e) => setSearchValue(e.target.value)}

            />
            <Button variant="outline-secondary" onClick={handlerClick}>Search</Button>
         </Form>
        </div>
       <main className='container-fluid  movies__container justify-center'>
          <SearchList  key={movies.id} movies={movies} />

       </main>
    </>
  )
}
