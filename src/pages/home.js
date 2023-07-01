import {  useContext } from "react";
import { MainContextState } from "@/components/context/MainContextProvider";

const Home = () => {
    const { state } = useContext(MainContextState);
    
    return (
        <div className= "bg-dark">        
        <h1 className="m-0 p-2 text-center text-white bg-dark border rounded border-warning">Bienvenido {state.username}</h1>
        </div>
    )
}

export default Home