const API_URL = 'https://www.omdbapi.com/?apikey=b69370e4'

export const searchMovies = async({query}) => {
    if(query === '') return null

    try{
        const response = await fetch(`${API_URL}&s=${query}`)
        const json = await response.json()

        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            type: movie.Type,
        }))

    }catch(error){
        throw new Error('Error searching movies ', error)
    }
}