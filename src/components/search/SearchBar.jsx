

import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import {getMovieByName} from './getMovieByName'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import { SearchList } from './SearchList';



export default function SearchBar(props) {

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState( []);
  const router = useRouter()


  const handlerSubmit = async (e) => {
   e.preventDefault()
   setSearchValue('')
   router.push({pathname: '/buscar',
                 query:  {searchValue} }
              )
    }

  return (
    <>
    <form className="d-flex" onSubmit={(e)=>handlerSubmit(e)} >
    <Form.Control
      type="text"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      value={searchValue}
     // onChange = {handlerOnChance}
      onChange={(e) => setSearchValue(e.target.value)}
    />

    {/* <Button variant="outline-secondary">Search</Button> */}
    </form>
    </>
  )
}
