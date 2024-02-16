import React, { useEffect, useState} from 'react'
import { getPlaces } from '../../Services/places.js'
import Page from '../../components/Page/Page.jsx'
import { Link } from 'react-router-dom'

const Places = () => {
  
  const [places, setPlaces] = useState(null)
  useEffect( () => {
    getPlaces(setPlaces)
  }, [])

  return (
    <Page>
      <h1>Lugares</h1>
      <Link to="/Places/new">
        <button className="btn btn-outline-primary">Agregar lugar</button>
      </Link>
      <div className='row' style={{marginTop: '20px', marginLeft: '20px'}}>
        {places !== null ? (
          places.map(p => (
            <div key={p._id} className='col-md-4 mb-4'>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <Link to={`/place/${p._id}`}>
                    <button className="btn btn-primary">Ver mas</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : ('No hay lugares para mostrar')}
      </div>
    </Page>
  )
}

export default Places