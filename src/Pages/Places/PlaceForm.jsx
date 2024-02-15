import React from 'react'
import Page from '../../components/Page/Page.jsx'
import { postPlace } from '../../Services/places.js'

const PlaceForm = ({place, setPlace}) => {
  let {name, description} = place;
  
  const handleChange = e => {
    setPlace({
      ...place, [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async () => {
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(place)
    }
    try{
      await postPlace(request)
    }catch(error){
      console.log(error);
    }
    setPlace({
      name: 'a',
      description: 'a'
    })
  }

  return (
    <Page>
      <h1>Agregar nuevo lugar</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="placeName">Nombre</label>
            <input value={name} onChange={handleChange} type="text" className="form-control" id="placeName" placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="placeDescription">Descripcion</label>
            <input value={description} onChange={handleChange} type="text" className="form-control" id="placeDescription" placeholder="Descripcion" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </Page>
  )
}

export default PlaceForm