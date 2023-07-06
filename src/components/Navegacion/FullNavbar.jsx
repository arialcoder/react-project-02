
import { MainContextState } from "../context/MainContextProvider";
import { useState, useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown'

/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "../search/SearchBar";

const FullNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const { state } = useContext(MainContextState);

  return (
    <>
      <Navbar className='navbar navbar-dark negro text-capitalize'>
        <Container fluid>
          <Navbar.Brand href='/'>
            <img className='logo' src='./Netflix.png' />
          </Navbar.Brand>
          <Nav className='me-auto px-2'>
            <Link className='px-2' href='/' passHref>
              Inicio
            </Link>
            <Link className='px-2' href='/series' passHref>
              Series
            </Link>
            <Link className='px-2' href='/peliculas' passHref>
              Películas
            </Link>
            <Link className='px-2' href='/favoritos' passHref>
              Mi lista
            </Link>
            {/* <Nav.Link href="#Idiomas">Explora por idiomas</Nav.Link> */}
            <Dropdown className='nav-item dropdown'>
              <Dropdown.Toggle variant='bg-dark border-secondary text-light' id='dropdown-autoclose-true'>
                Español
              </Dropdown.Toggle>
              <Dropdown.Menu variant='dark'>
                <Dropdown.Item href='#opcion-1'>Español</Dropdown.Item>
                <Dropdown.Item href='#opcion-2'>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>

          <Nav className="justify-content-end" activeKey="/home">
            <SearchBar />
            <Link className="px-2" href="/buscar" >
             <i className="bi bi-search"></i>
            </Link>
            <Nav.Link>
              <i className="bi bi-lightbulb"></i>
            </Nav.Link>
            <Nav.Link onClick={() => toggleShowMenu()}>
              <img className="perfil" src="./perfil.png"></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <ProfileMenu showMenu={showMenu} />
    </>
  );
};

export default FullNavBar;
