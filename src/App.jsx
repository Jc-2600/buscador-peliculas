import { useState, useEffect } from 'react'
import './App.css'
import { Movies } from './components/RenderMovies'
import { useMovies } from './hooks/useMovies'



function App() {
  const [query, setQuery] = useState('')
  const {movies: mappedMovies} = useMovies()
  const [error, setError] = useState(null)


  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log({query})
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() =>{
    if(query === ''){
      setError('Debes escribir algo para realizar la búsqueda')
      return
    } 
    if(query.match(/^\d+$/)){
      setError('La búsqueda no puede ser un número')
      return
    }
    if(query.length < 3){
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  },[query])

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
