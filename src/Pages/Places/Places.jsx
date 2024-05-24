import React, { useContext, useEffect, useState} from 'react'
import './Places.css';
import Place from '../../components/Places/Place.jsx'
import { getPlaces, deletePlace } from '../../Services/places.js'
import { addFavorite, addVisited, getAllFavorites } from '../../Services/users.js'
import { PlacesContext } from '../../Context/PlacesContext.jsx'
import Page from '../../components/Page/Page.jsx'
import { Link } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Places = () => {
  const { places } = useContext(PlacesContext);
  const [favorites, setFavorites] = useState([]);
  const [efecto, setEfecto] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const request = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`}
  }

  // useEffect(() => {
  //   const favs = getAllFavorites();
  //   setFavorites(favs);
  // }, [])
  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       const favs = await getAllFavorites();
  //       if (Array.isArray(favs)) {
  //         setFavorites(favs);
  //       } else {
  //         console.error('getAllFavorites did not return an array');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching favorites:', error);
  //     }
  //   };
  
  //   fetchFavorites();
  // }, []);
  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       const favs = await getAllFavorites();
  //       console.log('Favoritos devueltos:', favs);  // Añadir este log para depuración
  //       if (Array.isArray(favs)) {
  //         setFavorites(favs);
  //       } else {
  //         console.error('getAllFavorites no devolvió un array');
  //         setFavorites([]);  // Asegúrate de que `favorites` sea un array
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener favoritos:', error);
  //       setFavorites([]);  // Asegúrate de que `favorites` sea un array en caso de error
  //     }
  //   };
  
  //   fetchFavorites();
  // }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
        try {
            const favs = await getAllFavorites(request);
            console.log('Favoritos devueltos:', favs);  // Añadir este log para depuración
            setFavorites(favs);
        } catch (error) {
            console.error('Error al obtener favoritos:', error);
            setFavorites([]);  // Asegúrate de que `favorites` sea un array en caso de error
        }
    };

    fetchFavorites();
}, []);
  // useEffect( () => {
  //   getPlaces(setPlaces);
  //   setUpdate(false);
  // }, [update])

  // const favOnClick = async (id) =>{
  //   handleButtonClick();
  //   if(false){
  //     //removeFavorite(id)
  //   }else{
  //     try{
  //       await addFavorite(id, request);
  //       setUpdate(true);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }    
  // }

  // const visitedOnClick = async (id) => {
  //   handleButtonClick();
  //   try{
  //     await addVisited(id, request);
  //     setUpdate(true);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // const handleButtonClick = () => {
  //   setIsAnimating(true);
  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 1000);
  // }
  
  // const handleDelete = async (id) => {
  //   const request = {
  //     method: 'DELETE'
  //   }
  //   try{
  //     await deletePlace(id, request);
  //     setUpdate(true);
  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  return (
    <Page>
      <h1>Lugares</h1>
      <Link to="/Places/new">
        <button className="btn btn-primary btn-custom">Agregar lugar</button>
      </Link>
      <Link to="/users/favorites">
        <button className="btn btn-primary btn-custom">Favoritos</button>
      </Link>
      <Link to="/users/visited">
        <button className="btn btn-primary btn-custom">Visitados</button>
      </Link>
      <div className='row row-custom' style={{marginTop: '20px', marginLeft: '20px'}}>
        {places !== null ? (
          places.map((p) => {
            const esFavorito = favorites.includes(p._id);
            const favorito = esFavorito ? true : false;
            
            return <Place place={p} favorito={favorito} key={p._id} />;

          })
            // <div key={p._id} className='col-md-4 mb-4'>
            //   <div className="card bg-transparent card-custom">
            //     <div className="card-body place">
            //       <h5 className="card-title">{p.name}</h5>
            //       <FontAwesomeIcon className="btnAdd col-1" icon={faHeart} onClick={() => favOnClick(p._id)} />
            //       <FontAwesomeIcon className="btnAdd col-2" icon={faSquareCheck} onClick={() => visitedOnClick(p._id)}/>
            //       <p className="card-text">{p.description}</p>
            //       <Link to={`/place/${p._id}`}>
            //         <button className="btn btn-primary">Ver mas</button>
            //       </Link>
            //       <button onClick={() => handleDelete(p._id)} className="btn btn-danger btn-custom">Eliminar</button>
            //     </div>
            //   </div>
            // </div>
          )
         : ('No hay lugares para mostrar')}
      </div>
    </Page>
  )
}

export default Places