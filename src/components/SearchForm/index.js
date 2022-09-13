import React, {useState} from 'react'
import { useLocation} from "wouter"

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = (evt) =>{
    setRating(evt.target.value)
}

  return (
  <form onSubmit={handleSubmit}>
    <button>Buscar</button>
    <input placeholder="Search a gif here..." 
    onChange={handleChange} 
    type='text' value={keyword} />
    <button id="boton">Buscar</button>
    <select onChange={handleChangeRating} value={rating}>
      <option disabled> Rating type</option>
      {RATINGS.map((rating) => (
      <option key={rating}>{rating}</option> ))}
    </select>
  </form>
  )
}

export default React.memo(SearchForm)