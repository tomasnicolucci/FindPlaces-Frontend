import React from 'react'
import Page from '../../components/Page/Page.jsx'

const PlaceForm = () => {
  return (
    <Page>
      <h1>Agregar nuevo lugar</h1>
      <div>
        <form>
          <div className="form-group">
            <label for="placeName">Nombre</label>
            <input type="text" className="form-control" id="placeName" placeholder="Nombre" />
          </div>
          <div className="form-group">
            <label for="placeDescription">Descripcion</label>
            <input type="textArea" className="form-control" id="placeDescription" placeholder="Descripcion" />
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </div>
    </Page>
  )
}

export default PlaceForm