

import { useState, useEffect } from "react";
import {getMovieByName} from './getMovieByName'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import { SearchList } from './SearchList';


import { useRouter } from 'next/router'

export default function SearchBar(props) {

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState( []);
  const router = useRouter()



    const handlerSubmit = async (e) => {
      e.preventDefault()
      // router.push( `buscar/?search=${searchValue}`)
        // getMovieByName(searchValue)
        //   .then( movies => setMovies(movies))
        //   console.log(movies)
        router.push( "/buscar")
    }

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
