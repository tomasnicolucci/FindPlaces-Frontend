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
      <h1>Places</h1>
      <div>
        {places !== null ? (
          places.map(p => (
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{p.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">{p.description}</p>
            <a href="" className="card-link">Ver mas</a>
          </div>
        </div>))
        ) : ('Cargando...')}
      </div>
    </Page>
  )
}

export default Places