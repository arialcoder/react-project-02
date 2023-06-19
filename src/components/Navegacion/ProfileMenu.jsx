
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { MainContextState } from "../context/MainContextProvider";


/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const ProfileMenu = (params) => {
    
    const { state, dispatch } = useContext(MainContextState)
    const logOut = () => {
       
        dispatch({type:"LOGOUT"})
    }

    if (!params.showMenu) { return <></> }
    return (
        <>
            <Container fluid className=" container__profile_menu  " >
                <div className="profile__menu ">

                    <ul className="nav flex-column" >
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nombre de usuario </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Administra perfiles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Transferir perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cuenta</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Centro de Ayuda</a>
                        </li>
                        <li className="nav-item" onClick={() => {
                            logOut();
                        }}>
                            <a className="nav-link" href="#">Cerrar sesion en Netflix</a>
                        </li>
                    </ul>
                </div>

            </Container>
        </>
    );
};

export default ProfileMenu;
