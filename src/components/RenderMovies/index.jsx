
import '../RenderMovies/styles.css'

function  renderMovies({movies})  {
    return (
        <ul className='grid-movies'> 
        {
          movies.map((movie) => (
            <li key={movie.id} className="card">
                <div className='meta-data'>
                    <h2 className='title-movie'>{movie.title}</h2>
                  <p>{movie.year}</p>
                </div>
              <img src={movie.poster} alt={movie.title} />
            </li>
          ))
        }
    </ul>
    )
}
function rederNoMovies () {
    return (
      <p>No hay resultados para tu búsqueda.</p>
    )
}


export function Movies ({movies}){
    const hasMovies =  movies?.length > 0 
    return(
        hasMovies
        ? renderMovies({movies}) 
        : rederNoMovies()  // Ternary operator para renderizar componentes según la condición
    )
}

