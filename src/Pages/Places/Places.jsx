import React, { useEffect, useState} from 'react'
import { getPlaces } from '../../Services/places.js'
import Page from '../../components/Page/Page.jsx'

const Places = () => {
  
  const [places, setPlaces] = useState(null)
  useEffect( () => {
    getPlaces(setPlaces)
  }, [])

  return (
    <Page>
      <div>Places</div>
      <div>
        {places !== null ? (
          places.map(p => (p.name + p.description))
        ) : ('Cargando...')}
        
        </div>
    </Page>
  )
}

export default Places