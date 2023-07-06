

export const getMovieByName = async (searchValue) => {
    //recordar que esta funcion devuelve una promesa
    const API_KEY = '5cfb6e84540e60dcfb925c8dbfcd1aca'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`

    try {
    const response = await fetch(url)
    const data = await response.json()

    const movies = data.results
    return movies;

    } catch (error) {
      throw new Error('error searching movies')
    }
}