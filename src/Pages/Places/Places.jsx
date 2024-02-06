import React, { useEffect, useState} from 'react'
import { getPlaces } from '../../Services/places.js'

const Places = () => {
  
  const [places, setPlaces] = useState(null)
  useEffect( () => {
    getPlaces(setPlaces)
  }, [])

  return (
    <>
    <div>Places</div>
    <div>
      {places !== null ? (
        places.map(p => (p.name + p.description))
      ) : ('Cargando...')}
      
      </div>
    </>
  )
}

export default Places