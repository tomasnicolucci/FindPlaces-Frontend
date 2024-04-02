import './forms.css'
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
      <div>
        <form onSubmit={handleSubmit} className='form'>
          <h1>Agregar nuevo lugar</h1>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input value={place.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" placeholder="Ingrese el nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <input value={place.description} onChange={handleChange} name="description" type="text" className="form-control" id="description" placeholder="Descripcion" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Dirección</label>
            <input value={place.direction} onChange={handleChange} name="direction" type="text" className="form-control" id="direction" placeholder="Direccion" />
          </div>
          <div className="form-group">
            <label htmlFor="dates">Días y horarios</label>
            {/* <input value={place.dates} onChange={handleChange} name="dates" type="date" className="form-control" id="dates" placeholder="" /> */}
            <select className="form-select" value={place.dates} onChange={handleChange} name="dates" type="date" id="dates">
              <option selected>Seleccionar días</option>
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ticket">Entrada</label>
            <select className="form-select" value={place.ticket} onChange={handleChange} name="ticket" type="text" id="ticket">
                <option selected>Seleccionar...</option>
                <option value="Gratis">Gratis</option>
                <option value="Paga">Paga</option>
                <option value="Contribucion">Contribución</option>
              </select>
          </div>
          <button type="submit" className="btn btn-primary form-button">Guardar</button>
        </form>
      </div>
    </>
  )
}

export default NewPlace