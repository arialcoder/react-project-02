

import { useState, useEffect } from "react";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import { SearchList } from './SearchList';


import { useRouter } from 'next/router'

export default function SearchBar(props ) {

  const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState( []);
    const router = useRouter()

    const getMovieByName = async (searchValue) => {
        const API_KEY = "5cfb6e84540e60dcfb925c8dbfcd1aca";
        const url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`

        try {
          const response = await fetch(url);
          const data = await response.json();

          //console.log(data.results);

         if (data.results) {
           return setMovies(data.results);
        }


        } catch (error) {
          throw new Error('error searching movies')

        }

    }

      const handlerSubmit = async(e)=>{
        e.preventDefault()

        if( searchValue.trim().length > 2){
           getMovieByName(searchValue)
           console.log(movies)
        }
        // router.push( "/?search=" + searchValue)
      }

      useEffect(() => {
        if( searchValue.trim().length > 2){
          getMovieByName(searchValue)
        }
      },
      []);


  return (
    <>
    <Form className="d-flex" onSubmit={handlerSubmit} >
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      value={searchValue}
     // onChange = {handlerOnChance}
      onChange={(e) => setSearchValue(e.target.value)}

    />

    {/* <Button variant="outline-secondary">Search</Button> */}
    </Form>

    </>

  )
}
