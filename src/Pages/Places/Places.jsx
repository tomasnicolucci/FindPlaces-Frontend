import React, { useEffect, useState} from 'react'
import { getPlaces, deletePlace } from '../../Services/places.js'
import { addFavorite, addVisited } from '../../Services/users.js'
import Page from '../../components/Page/Page.jsx'
import { Link } from 'react-router-dom'

const Places = () => {
  const [update, setUpdate] = useState(false)
  const [places, setPlaces] = useState(null)
  
  useEffect( () => {
    getPlaces(setPlaces);
    setUpdate(false);
  }, [update])

  const handleDelete = async (id) => {
    const request = {
      method: 'DELETE'
    }
    try{
      await deletePlace(id, request);
      setUpdate(true);
    } catch(error){
      console.log(error);
    }
  }

  const handleFavorite = async (id) => {
    const storedToken = localStorage.getItem('token');
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${storedToken}`}
    }
    try{
      await addFavorite(id, request);
      setUpdate(true);
    }catch(error){
      console.log(error);
    }
  }

  const handleVisited = async (id) => {
    const storedToken = localStorage.getItem('token');
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${storedToken}`}
    }
    try{
      await addVisited(id, request);
      setUpdate(true);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <Page>
      <h1>Lugares</h1>
      <Link to="/Places/new">
        <button className="btn btn-outline-primary">Agregar lugar</button>
      </Link>
      <Link to="/users/favorites" className="icono">
        <button className="btn btn-outline-primary">Favoritos</button>
      </Link>
      <Link to="/users/visited" className="icono">
        <button className="btn btn-outline-primary">Visitados</button>
      </Link>
      <div className='row' style={{marginTop: '20px', marginLeft: '20px'}}>
        {places !== null ? (
          places.map(p => (
            <div key={p._id} className='col-md-4 mb-4'>
              <div className="card" style={{width: "20rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <input onClick={() => handleFavorite(p._id)} className="form-check-input" type="checkbox" value="" id="checkFavorite"/>
                  <label className="form-check-label" for="checkFavorite">Favorito</label>
                  <input onClick={() => handleVisited(p._id)} className="form-check-input" type="checkbox" value="" id="checkVisited"/>
                  <label className="form-check-label" for="checkVisited">Visitado</label> <br/>
                  <Link to={`/place/${p._id}`}>
                    <button className="btn btn-primary">Ver mas</button>
                  </Link>
                  <button onClick={() => handleDelete(p._id)} className="btn btn-danger">Eliminar</button>
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