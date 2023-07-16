

import { useState } from "react";
import { useRouter } from 'next/router'


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";


export default function SearchBar(props) {

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const router = useRouter()


  const handlerSubmit = async (e) => {
  e.preventDefault()
  setSearchValue('')

    // router.push( `buscar/?search=${searchValue}`)

   router.push({ pathname:"/buscar",
                 query: {searchValue}
   })
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
      maxLength={30}
     // onChange = {handlerOnChance}
      onChange={(e) => setSearchValue(e.currentTarget.value)}
    />

    {/* <Button variant="outline-secondary">Search</Button> */}
    </Form>
    </>
  )
}
