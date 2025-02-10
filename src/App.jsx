import './App.css'
import { Movies } from './components/RenderMovies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'



function App() {
  const {setQuery, error, query} = useSearch()
  const {movies: mappedMovies, getMovies} = useMovies({query})


  const handleSubmit = (event) =>{
    event.preventDefault()  
    getMovies()
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange}value={query} name='query' placeholder='Avenger, Star Wars, Matrix' />
          <button  type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'greenyellow', fontSize: 15, fontStyle: 'italic' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies}/>
      </main>
    </div>
  )
}

export default App
