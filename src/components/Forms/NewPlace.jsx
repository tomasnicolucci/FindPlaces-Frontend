import React, { useState } from 'react'
import { postPlace } from '../../Services/places.js'
const NewPlace = () => {
    const [place, setPlace] = useState({name: '', description:''});
  
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
        name: '',
        description: ''
      })
    }
  return (
    <>
      <h1>Agregar nuevo lugar</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input value={place.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripcion</label>
            <input value={place.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" placeholder="Descripcion" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </>
  )
}

export default NewPlace