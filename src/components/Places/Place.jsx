import React, {useState, useEffect} from 'react'
import './Place.css'
import { Link } from 'react-router-dom'
import { deletePlace } from '../../Services/places.js'
import { addFavorite, addVisited } from '../../Services/users.js'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Place = ({place, favorito}) => {
    // const {_id, name, description} = props.place;
    const [update, setUpdate] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false);
    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }
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
      const favOnClick = async (id) =>{
          handleButtonClick();
          if(false){
            //removeFavorite(id)
          }else{
            try{
              await addFavorite(id, request);
              setUpdate(true);
            }catch(error){
              console.log(error);
            }
          }    
        }

        const visitedOnClick = async (id) => {
          handleButtonClick();
          try{
            await addVisited(id, request);
            setUpdate(true);
          }catch(error){
            console.log(error);
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
          try{
            await deletePlace(id, request);
            setUpdate(true);
          } catch(error){
            console.log(error);
          }
        }
  return (
    <div className="card" style={{width: "20rem"}}>
        <div className="card-body">
        <h5 className="card-title">{place.name}</h5>
        <p className="card-text">{place.description}</p>
        <FontAwesomeIcon className={`${favorito === true ? "btnAdd col-1 corazon" : "btnAdd col-2"}`} icon={faHeart} onClick={() => favOnClick(place._id)} />       
        <FontAwesomeIcon className="btnAdd col-2" icon={faSquareCheck} onClick={() => visitedOnClick(place._id)}/>      
        <Link to={`/place/${place._id}`}>
            <button className="btn btn-primary">Ver mas</button>
        </Link>
        <button onClick={() => handleDelete(place._id)} className="btn btn-danger">Eliminar</button>
        </div>
    </div>
    
  )
}

export default Place
