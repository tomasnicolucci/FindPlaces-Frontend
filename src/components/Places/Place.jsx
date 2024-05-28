import React, { useState, useEffect } from 'react'
import './Place.css'
import { Link } from 'react-router-dom'
import { deletePlace } from '../../Services/places.js'
import { addFavorite, addVisited } from '../../Services/users.js'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Place = ({ place, favorito, visitado }) => {
  // console.log('Place component:', { place, favorito }); 
  const [update, setUpdate] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false);
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }

  const favOnClick = async (id) => {
    handleButtonClick();
    if (!favorito) {
      try {
        await addFavorite(id, request);
        setUpdate(true);
      } catch (error) {
        console.log(error);
      }
    } else {

    }
  }

  const visitedOnClick = async (id) => {
    handleButtonClick();
    if (!visitado) {
      try {
        await addVisited(id, request);
        setUpdate(true);
      } catch (error) {
        console.log(error);
      }
    } else {

    }
  }

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }

  const handleDelete = async (id) => {
    const request = {
      method: 'DELETE'
    }
    try {
      await deletePlace(id, request);
      setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div key={place._id} className='col-md-4 mb-4'>
      <div className="card bg-transparent card-custom">
        <div className="card-body place">
          <div className="titleContainer">
            <h5 className="card-title">{place.name}</h5>
            <FontAwesomeIcon className={`${favorito ? "btnAdd corazon" : "btnAdd"}`} icon={faHeart} onClick={() => favOnClick(place._id)} />
            <FontAwesomeIcon className={`${visitado ? "btnAdd check col-2" : "btnAdd col-2"}`} icon={faSquareCheck} onClick={() => visitedOnClick(place._id)} />
          </div>
          <p className="card-text">{place.description}</p>
          <Link to={`/place/${place._id}`}>
            <button className="btn btn-primary">Ver mas</button>
          </Link>
          <button onClick={() => handleDelete(place._id)} className="btn btn-danger btn-custom">Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default Place
