import { createContext, useState , useReducer} from "react";
import { getInitialState, Reducer , defaultState} from "./MainContext";


export const MainContextState = createContext();

export function MainContextProvider ( { children }) {
    //const [dataState, setDataState] = useState(getInitialState());
    const [state, dispatch] = useReducer(Reducer, defaultState);
    return (
        <>
            <MainContextState.Provider  value={{ state, dispatch }}>
                { children }
            </MainContextState.Provider>
        </>
    );
}