import { createContext, useState } from 'react';

export const SearchContext = createContext();


export const DataProvider = ({children}) =>{
    const [searchValue, setSearchValue] = useState('marvel')

    return (
        <DataProvider.Provider value={{searchValue, setSearchValue}} >
            {children}
        </DataProvider.Provider>
    )
}