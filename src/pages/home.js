import {  useContext } from "react";
import { MainContextState } from "@/components/context/MainContextProvider";

const Home = () => {
    const { state } = useContext(MainContextState);
    
    return (
        <>        
        <h1>Bienvenido {state.username}</h1>
        </>
    )
}

export default Home