import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { getPlaces, deletePlace } from '../../Services/places.js'
// import { addFavorite, addVisited } from '../../Services/users.js'

const Place = (props, handleDelete, handleFavorite, handleVisited) => {
    const {_id, name, description} = props.place;
    // const [update, setUpdate] = useState(false)
    // const [places, setPlaces] = useState(null)

    // useEffect( () => {
    //   getPlaces(setPlaces);
    //   setUpdate(false);
    // }, [update])

    // const handleDelete = async (id) => {
    //     const request = {
    //       method: 'DELETE'
    //     }
    //     try{
    //       await deletePlace(id, request);
    //       setUpdate(true);
    //     } catch(error){
    //       console.log(error);
    //     }
    //   }
    
    //   const handleFavorite = async (id) => {
    //     const storedToken = localStorage.getItem('token');
    //     const request = {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${storedToken}`}
    //     }
    //     try{
    //       await addFavorite(id, request);
    //       setUpdate(true);
    //     }catch(error){
    //       console.log(error);
    //     }
    //   }
    
    //   const handleVisited = async (id) => {
    //     const storedToken = localStorage.getItem('token');
    //     const request = {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${storedToken}`}
    //     }
    //     try{
    //       await addVisited(id, request);
    //       setUpdate(true);
    //     }catch(error){
    //       console.log(error);
    //     }
    //   }

  return (
    <div className="card" style={{width: "20rem"}}>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <input onClick={() => handleFavorite(_id)} className="form-check-input" type="checkbox" value="" id="checkFavorite"/>
        <label className="form-check-label" for="checkFavorite">Favorito</label>
        <input onClick={() => handleVisited(_id)} className="form-check-input" type="checkbox" value="" id="checkVisited"/>
        <label className="form-check-label" for="checkVisited">Visitado</label> <br/>
        <Link to={`/place/${_id}`}>
            <button className="btn btn-primary">Ver mas</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-danger">Eliminar</button>
        </div>
    </div>
    
  )
}

export default Place
