import { useEffect, useState,useRef } from "react"

export function useSearch (){
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
 

  useEffect(() =>{
    if(isFirstInput.current){
      isFirstInput.current =  query === ''
      return
    }
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

  return{setQuery, error, query}
}