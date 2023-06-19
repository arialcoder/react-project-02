import { useState, useEffect } from "react";

export const FetchData = (tipo) => {
    const API_KEY = "5cfb6e84540e60dcfb925c8dbfcd1aca";
    const URL_BASE = `https://api.themoviedb.org/3/${tipo}/popular?api_key=`;
    const URL_API = URL_BASE + API_KEY;

    //variables de estado:
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(URL_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.results);
                setData(data.results);
            });
    }, []);

    return { data };
};
